import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router';

function Header() {

  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // console.log("sign out working");
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (
    <div className="absolute w-screen px-12 py-2 bg-gradient-to-b from-black z-20 flex items-center justify-between">
      <img
        className="w-48"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex gap-2">
        <img
          alt="user icon"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          className="w-10"
        />
        <button className="cursor-pointer bg-red-800 text-white py-2 px-4 rounded-lg" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Header;
