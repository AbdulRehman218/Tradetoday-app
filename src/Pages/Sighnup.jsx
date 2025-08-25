import React from "react";
import auth from "../assets/auth.png";
import logo from "../assets/logo.svg";

export default function Signup({ onNavigate }) {
  const handleHomeClick = () => {
    onNavigate('home');
  };

  const handleSignInClick = () => {
    onNavigate('login');
  };

  return (
    <div className="flex bg-gradient-to-b from-[#00152F] to-[#020B16] text-white">
      {/* Left Side - Form */}
      <div className="w-full md:w-[45%] flex flex-col items-center lg:py-5 md:py-6">
        
        {/* Logo */}
        <div className="w-61.5 pb-2 mt-[0.5px] -ml-4 md:pb-6">
          <img 
            src={logo} 
            alt="Logo" 
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={handleHomeClick}
          />
        </div>

        {/* Form Section */}
        <div className="w-[90%] sm:w-[75%] font-mono mx-auto 2xl:mt-15">
          <h1 className="text-xl md:text-2xl 2xl:text-[24px] 2xl:leading-normal pb-1 font-semibold">
            Welcome to Trade Today
          </h1>

          <form className="my-3.5 space-y-6 2xl:space-y-8">
            {/* Username */}
            <div className="flex flex-col space-y-1 relative">
              <label className="text-white 2xl:text-md font-medium">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="bg-white text-gray-900 2xl:text-md px-4 py-2.5 2xl:py-3 rounded-sm focus:outline-none placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2 relative">
              <label className="text-white 2xl:text-md font-medium">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 2xl:text-md px-4 py-2.5 2xl:py-3 rounded-sm focus:outline-none placeholder-gray-500"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-2 relative">
              <label className="text-white 2xl:text-md font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="bg-white text-gray-900 2xl:text-md px-4 py-2.5 2xl:py-3 rounded-sm focus:outline-none placeholder-gray-500"
              />
              <div className="absolute right-4 top-10 2xl:top-[44px] cursor-pointer text-gray-600">
                {/* Eye Icon */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                </svg>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col space-y-2 relative">
              <label className="text-white 2xl:text-md font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="bg-white text-gray-900 2xl:text-md px-4 py-2.5 2xl:py-2.75 rounded-md focus:outline-none placeholder-gray-500"
              />
              <div className="absolute right-4 top-10 2xl:top-[44px] cursor-pointer text-gray-600">
                {/* Eye Icon */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                </svg>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#4FD1C5] text-white 2xl:text-md rounded py-3 2xl:py-3 w-full font-semibold"
            >
              Sign up
            </button>

            <p className="text-red-500 2xl:text-sm text-center">Login failed</p>
          </form>

          {/* Footer Link */}
          <div className="text-end text-white mt-5">
            <p className="text-gray-400 2xl:text-md">
              Already have an account?{" "}
              <button 
                onClick={handleSignInClick}
                className="text-[#4FD1C5] 2xl:text-md hover:underline cursor-pointer">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div
        className="w-[55%] min-h-screen bg-cover bg-center hidden md:flex"
       style={{ backgroundImage: `url(${auth}` }}
      ></div>
    </div>
  );
}
