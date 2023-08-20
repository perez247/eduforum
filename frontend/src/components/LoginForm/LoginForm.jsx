import React from "react";
import { UserIcon, LockClosedIcon, EyeIcon } from "@heroicons/react/24/outline";

/**
 * @param {object} props
 * @param {(data) => {}} props.showRegister
 * @param {(data) => {}} props.routeAfterLogin
 * @returns 
 */
const LoginForm = (props) => {

  function showRegistration() {
    props.showRegister(true);
  }

  return (
    <div className="bg-white shadow-lg shadow-primary/50 w-1/3 p-5 rounded-lg">
      <h1 className="text-3xl my-1">Login</h1>
      <p className="text-sm my-1">Welcome to EduForum</p>
      <div className="border-solid border-2 bg-[#FFFAFA] border-[##FFFAFA] flex w-full px-2 py-2 my-4 rounded-md items-center">
        <UserIcon className="felx-none h-6 w-6 text-black ms-1 me-2" />
        <input
          placeholder="Input your username"
          className="felx-initial mx-1 w-full bg-[#FFFAFA] text-black border-0"
        />
      </div>
      <div className="border-solid border-2 bg-[#FFFAFA] border-[##FFFAFA] flex w-full px-2 py-2 my-4 rounded-md items-center">
        <LockClosedIcon className="felx-none h-6 w-6 text-black ms-1 me-2" />
        <input
          type="password"
          placeholder="Input your password"
          className="felx-initial mx-1 w-full bg-[#FFFAFA] text-black border-0"
        />
        <EyeIcon className="felx-initial h-6 w-6 text-black ms-2 mx-1" />
      </div>
      <div className="w-full py-2 mt-4 rounded-md items-center flex justify-center">
        <button className="w-full h-9 font-bold bg-primary text-white rounded-md" onClick={() => props.routeAfterLogin('/private/group')}>
          Login
        </button>
      </div>
      <div className="w-full py-2 mt-2 rounded-md items-center flex justify-between">
        <p className="text-primary cursor-pointer">Forgot password?</p>
        <p className="text-primary cursor-pointer" onClick={showRegistration}>
          Sign up
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
