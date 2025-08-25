import React from 'react'
import logo from '../assets/logo.svg'
import auth from '../assets/auth.png'

function Login({ onNavigate }) {
  const handleHomeClick = () => {
    onNavigate('home');
  };

  const handleSignUpClick = () => {
    onNavigate('signup');
  };

  return (
    <>
    <div className='App-container'>
     <div className="flex bg-gradient-to-b font-mono from-[#00152F] to-[#020B16] text-white min-h-screen">
        <div class="w-full md:w-[45%] flex flex-col items-center py-6 md:py-8">
         <div class="pb-4 md:pb-6 max-w-80">
          <img 
            src={logo} 
            alt="" 
            className="w-65 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={handleHomeClick}
          />
             </div>
             <div className="w-[90%] sm:w-[75%] mx-auto 2xl:mt-15">
              <h1 className="text-xl md:text-2xl 2xl:text-2xl pb-2 font-semibold"> Nice to see you again</h1>
             <form className="md:my-5 space-y-6 2xl:space-y-7">
             <div class="flex flex-col space-y-2.5 relative">
             <label class="text-white 2xl:text-md font-medium">Email</label>
             <input type="text"
              name="email"
              placeholder="Enter your email" 
              className="bg-white text-gray-900 2xl:text-md px-4 py-2.5 2xl:py-[13.75px] rounded-sm focus:outline-none placeholder-gray-500 undefined"
             value=""/>
                 </div>
                <div className="flex flex-col space-y-2 relative">
                <label className="text-white 2xl:text-md font-medium">Password</label>
                  <input 
                 type="password" 
                name="password" 
                    placeholder="Enter your password"
                    className="bg-white text-gray-900 2xl:text-md px-4 py-2.5 2xl:py-[13.75px] rounded-sm focus:outline-none placeholder-gray-500 undefined" 
                    value=""/>
                     <div class="absolute right-4 top-10 2xl:top-[44px] cursor-pointer text-gray-600">
                     <svg stroke="currentColor" fill="currentColor"
                     stroke-width="0" viewBox="0 0 576 512"
                         height="20" width="20" 
                            xmlns="http://www.w3.org/2000/svg">
                           <path d="M572.52 241.4C518.29 135.59
                             410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 
                                        0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 
                                                 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144
                                                  144zm0-240a95.31 95.31 0 0 0-25.31 
                                                3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                                    </path>
                                                    </svg>
                                                    </div>
                                                    </div>
                                                    <div className="flex flex-col gap-4 sm:flex-row justify-between">
                                                        <label className="flex items-center space-x-3 cursor-pointer">
                                                         <div className="w-10 h-5 flex items-center rounded-full p-1 transition duration-300 bg-gray-500">
                                                         <div
                                                         className="bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ">
                                                </div>
                                                </div>
                                                <span className='2xl:text-[13px]'>Remember me</span>
                                                </label>
                                                <button type="button" className="text-[#4FD1C5] 2xl:text-[16px]">Forgot Password?</button>
                                                </div>
                                                <button type="submit" className="bg-[#4FD1C5] text-white 2xl:text-md rounded py-3 2xl:py-3.7 w-full font-semibold">Sign in</button>
                                                </form>
                                                <div className="text-end text-white mt-6">
                                                    <p className="text-gray-400  2xl:text-md">Don't have an account? 
                                                        <button 
                                                          onClick={handleSignUpClick}
                                                          className="text-[#4FD1C5] hover:underline  ml-2 cursor-pointer"> Sign up </button>
                                                        </p>
                                                        </div>
                                                        </div>
                                                        </div>
                                       <div className="w-[55%] min-h-screen bg-cover bg-center hidden md:flex"   style={{ backgroundImage: `url(${auth}` }}>
                                                        </div>
                                                        </div>

    </div>
    </>
  )
}

export default Login