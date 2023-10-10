import { auth } from "@/firebase";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

function SideBar() {
  const dispatch = useDispatch();
    const user = useSelector(state => state.user)




  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignupModal())
    dispatch(closeLoginModal())
  }

  return (
    <div className="h-full hidden sm:flex flex-col fixed xl:ml-24">
      <nav className="h-full xl:space-y-1.5 relative">
        <div className="flex justify-center items-center xl:justify-start py-3 xl:p-3">
          <Image src={"/assets/twitter-logo.png"} width={34} height={34} />
        </div>
        <SideBarLink Icon={HomeIcon} text={"Home"}></SideBarLink>
        <SideBarLink Icon={HashtagIcon} text={"Explore"}></SideBarLink>
        <SideBarLink Icon={BellIcon} text={"Notifications"}></SideBarLink>
        <SideBarLink Icon={InboxIcon} text={"Messages"}></SideBarLink>
        <SideBarLink Icon={BookmarkIcon} text={"Bookmarks"}></SideBarLink>
        <SideBarLink Icon={UserIcon} text={"Profile"}></SideBarLink>
        <SideBarLink
          Icon={DotsCircleHorizontalIcon}
          text={"More"}
        ></SideBarLink>
        <button className=" hidden xl:inline bg-[#1d9bf0] rounded-full h-[52px] w-[200px] text-lg font-bold mt-2">
          Tweet
        </button>
        <div
          onClick={handleSignOut}
          className="hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer xl:p-3 absolute bottom-0 flex justify-center items-center space-x-3"
        >
          <img
            className="w-10 h-10 rounded-full object-cover"
            src= {user.photoUrl || "/assets/elon.jpg"}
          />
          <div className="hidden xl:inline">
            <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
            <h1 className="text-gray-500">@{user.username}</h1>
          </div>
          <DotsHorizontalIcon className="h-5 hidden xl:inline" />
        </div>
      </nav>
    </div>
  );
}

export default SideBar;

function SideBarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation flex justify-center mb-3 xl:justify-start items-center text-xl space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
