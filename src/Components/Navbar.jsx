import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from '../assets/logo.svg'

const Navbar = ({ onNavigate, currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Pricing", href: "pricing" },
    { name: "FAQ's", href: "faqs" },
    { name: "Contact", href: "contact" },
  ];

  const handleJoinNow = () => {
    onNavigate('login');
  };

  const handleFreeTrial = () => {
    onNavigate('signup');
  };

  const handleHomeClick = () => {
    onNavigate('home');
  };

  return (
    <nav className="sticky top-0 z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:grid md:grid-cols-2 justify-center bg-white/0 backdrop-blur-md border-b border-white/30 shadow-lg">
        <div className="flex w-[80%] max-w-[1440px] mx-auto text-white items-center py-4 2xl:py-6.5 rounded-2xl col-span-2 md:col-span-2">
          <div className="flex items-center lg:justify-between w-full">
            {/* Left Column - Logo */}
            <div className="flex items-center justify-start">
              <img
                src={logo}
                alt="Logo"
                className="w-52 2xl:w-58.5 h-full transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={handleHomeClick}
              />
            </div>

            {/* Right Column - Links + Buttons */}
            <div className="flex items-center justify-end gap-3.25 flex-col md:flex-col lg:flex-row md:space-y-2 lg:space-y-0 lg:space-x-1.5">
              {/* Links */}
              <div className="flex flex-col font-mono md:flex-col lg:flex-row gap-2.5">
                {links.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={-70}
                    className="cursor-pointer text-md 2xl:text-[19.5px] font-meduim p-2 rounded hover:text-primary transition-all duration-300 ease-out hover:scale-105"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-col lg:flex-row gap-4.75">
                <button 
                  onClick={handleFreeTrial}
                  className="flex items-center justify-center cursor-pointer gap-1.75 
                    font-semibold 2xl:text-[16px] font-mono py-2 px-5.75 pl-5.5 rounded-md 
                    transition-all duration-300 hover:bg-[#070F2B] hover:text-white 
                    shadow shadow-white bg-white text-[#070F2B] border hover:scale-105">
                  Join Now
                </button>

                <button 
                  onClick={handleJoinNow}
                  className="flex items-center justify-center cursor-pointer gap-1.75 2xl:text-[16px]
                    font-semibold font-mono py-2 px-5.75 rounded-md transition-all duration-300 
                    hover:bg-white hover:text-[#070F2B] hover:border hover:border-[#2D336B] 
                    bg-[#070F2B] text-white border border-[#2D336B] shadow shadow-white hover:scale-105">
                  Free 3 days trial
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center w-full bg-[var(--webBackground)] py-3 shadow-md z-40 px-4">
        <button 
          onClick={() => setMenuOpen(true)} 
          className="text-white transition-transform duration-300 hover:scale-110"
        >
          <svg
            className="size-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <img 
          src={logo} 
          alt="Logo" 
          className="h-12 transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={handleHomeClick}
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[var(--webBackground)] to-white text-white w-64 shadow-lg transform transition-all duration-500 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setMenuOpen(false)}
            className="transition-transform duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col p-4 gap-4">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              smooth={true}
              duration={800}
              offset={-70}
              onClick={() => {
                setMenuOpen(false);
              }}
              className="text-left mb-2 border-b border-[#FFF2F2] font-medium px-2 py-3 hover:text-primary cursor-pointer transition-all duration-300 hover:pl-4"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Navigation Buttons */}
          <button 
            onClick={() => {
              handleFreeTrial;
              setMenuOpen(false);
            }}
            className="text-left mb-2 border-b border-[#FFF2F2] font-medium px-2 py-3 hover:text-primary cursor-pointer transition-all duration-300 hover:pl-4"
          >
            Join Now
          </button>
          
          <button 
            onClick={() => {
              handleJoinNow();
              setMenuOpen(false);
            }}
            className="text-left mb-2 border-b border-[#FFF2F2] font-medium px-2 py-3 hover:text-primary cursor-pointer transition-all duration-300 hover:pl-4"
          >
            Free 3 days trial
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;