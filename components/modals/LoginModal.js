import { auth } from "@/firebase";
import { closeLoginModal, openLoginModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  async function handleSignIn() {
     await signInWithEmailAndPassword(auth, email, password)
  }

  async function handleGuestSignIn() {
    await signInWithEmailAndPassword(auth, "guest1111100@gmail.com","123456")
  }


  return (
    <>
      <button
        onClick={() => dispatch(openLoginModal())}
        className="bg-transparent border border-white text-white  w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
      >
        Log In
      </button>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
      >
        <div className="w-[90%] h-[600px] bg-black text-white md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className=" mt-4 font-bold text-4xl">Sign in to your account</h1>
    
            <input onChange={e => setEmail(e.target.value)} placeholder="Email"
            className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6" type="email"/>
            <input onChange={e => setPassword(e.target.value)} placeholder="Password"
            className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6" type="password"/>
            <button onClick={handleSignIn} className=" mt-8 rounded-md bg-white text-black w-full font-bold text-lg p-2">
              Sign In
            </button>
            <h1 className="text-center mt-8 font-bold text-lg">or</h1>
            <button onClick={handleGuestSignIn} className="bg-white mt-4 text-black w-full font-bold text-lg p-2 rounded-md">
              Sign in As Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
