import {HomeIcon, HashtagIcon, InboxIcon, BookmarkIcon, ClipboardListIcon,BellIcon,UserIcon,DotsCircleHorizontalIcon} from "@heroicons/react/outline"
import Image from "next/image"

function SideBar() {
  return (
    <div className="h-full hidden sm:flex flex-col fixed xl:ml-24">
       
        <nav className="h-full xl:space-y-1.5 relative"> 
        <div className="flex justify-center items-center xl:justify-start py-3 xl:p-3">
            <Image src={"/assets/twitter-logo.png"} width={34} height={34}/>
        </div>
            <SideBarLink Icon={HomeIcon} text={"Home"}></SideBarLink>
            <SideBarLink Icon={HashtagIcon} text={"Explore"}></SideBarLink>
            <SideBarLink Icon={BellIcon} text={"Notifications"}></SideBarLink>
            <SideBarLink Icon={InboxIcon} text={"Messages"}></SideBarLink>
            <SideBarLink Icon={BookmarkIcon } text={"Bookmarks"}></SideBarLink>
            <SideBarLink Icon={UserIcon } text={"Profile"}></SideBarLink>
            <SideBarLink Icon={DotsCircleHorizontalIcon } text={"More"}></SideBarLink>
            <button className=" hidden xl:inline bg-[#1d9bf0] rounded-full h-[52px] w-[200px] text-lg font-bold mt-2">
                Tweet
            </button>
        <div className="absolute bottom-0">User</div>
        </nav>
    </div>
  )
}

export default SideBar

function SideBarLink({text,Icon}) {
    return (
        <li className="hoverAnimation flex justify-center mb-3 xl:justify-start items-center text-xl space-x-3">
            <Icon className="h-7"/>
            <span className="hidden xl:inline">
            {text}

            </span>
        </li>
    )

}