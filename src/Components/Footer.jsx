import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <>
      <div className="bg-[rgb(32,47,59)]  py-15 px-5 font-mono">
        <div className="flex flex-col md:flex-row gap-6 text-white w-full md:w-[80%] max-w-[1440px] mx-auto">
          
          {/* Left Section */}
          <div className="md:w-1/3 flex flex-col items-start">
            <div className="w-48 2xl:w-58 mb-5">
              <img src={logo} alt="TradeToday Logo" className="w-full h-auto" />
            </div>
            <p className="text-lg 2xl:text-[16px] text-[#CFCFCF] mb-6 font-normal leading-relaxed">
              Follow us on social media for the latest market updates, expert trading tips, and AI-driven insights:
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <div className="bg-white rounded-full p-3 flex items-center justify-center hover:bg-gray-100 transition">
                <a href="https://www.facebook.com/profile.php?id=61575667888046" target="_blank" rel="noopener noreferrer">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                    viewBox="0 0 320 512" color="#60CACB" height="24" width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 
                      12.42-50.06 52.24-50.06h40.42V6.26S260.43 
                      0 225.36 0c-73.22 0-121.08 
                      44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                    </path>
                  </svg>
                </a>
              </div>
              
              <div className="bg-white rounded-full p-3 flex items-center justify-center hover:bg-gray-100 transition">
                <a href="https://www.linkedin.com/company/tradetodayio/" target="_blank" rel="noopener noreferrer">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                    viewBox="0 0 448 512" color="#60CACB" height="24" width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 
                      108.1C24.09 108.1 0 83.5 0 53.8a53.79 
                      53.79 0 0 1 107.58 0c0 29.7-24.1 
                      54.3-53.79 54.3zM447.9 
                      448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 
                      0-55.69 37.7-55.69 
                      76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 
                      42.69-48.3 87.88-48.3 94 0 
                      111.28 61.9 111.28 142.3V448z">
                    </path>
                  </svg>
                </a>
              </div>
              
              <div className="bg-white rounded-full p-3 flex items-center justify-center hover:bg-gray-100 transition">
                <a href="https://www.instagram.com/trade_todayio?igsh=MWZ2MnF1bjBkMHJkOA==" target="_blank" rel="noopener noreferrer">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                    viewBox="0 0 448 512" color="#60CACB" height="24" width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 
                    319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 
                    2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
                    9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Middle Section - Legal */}
          <div className="md:w-1/3 flex flex-col sm:flex-row gap-20">
            <div className="flex-1 md:pl-30">
              <h3 className="text-xl 2xl:text-lg font-bold mb-3">Legal</h3>
              <ul className="space-y-3 2xl:text-md font-medium">
                <li><a className="hover:underline" href="/PrivacyPolicy">Privacy Policy</a></li>
                <li><a className="hover:underline" href="/TermsandConditions">Terms &amp; Conditions</a></li>
                <li><a className="hover:underline" href="/cookiespolicy">Cookies Policy</a></li>
              </ul>
            </div>
          </div>
          
          {/* Pages Section */}
          <div className="md:w-1/3 md:pl-30">
            <h3 className="text-xl 2xl:text-lg font-bold mb-3">Pages</h3>
            <div className="flex flex-col items-start gap-2">
              <Link to="home" smooth={true} duration={800} offset={-70} className="cursor-pointer hover:underline 2xl:text-md hover:text-primary">Home</Link>
              <Link to="about" smooth={true} duration={800} offset={-70} className="cursor-pointer hover:underline 2xl:text-md hover:text-primary">About</Link>
              <Link to="pricing" smooth={true} duration={800} offset={-70} className="cursor-pointer hover:underline 2xl:text-md hover:text-primary">Pricing</Link>
              <Link to="faqs" smooth={true} duration={800} offset={-70} className="cursor-pointer hover:underline 2xl:text-md hover:text-primary">FAQ's</Link>
              <Link to="contact" smooth={true} duration={800} offset={-70} className="cursor-pointer hover:underline 2xl:text-md hover:text-primary">Contact Us</Link>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="md:w-1/3 md:mr-10">
            <h3 className="text-xl 2xl:text-lg font-bold mb-3">Contact</h3>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-center space-x-3">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                  viewBox="0 0 512 512" className="text-teal-400" height="16" width="16"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 
                    9.7 4.7V400c0 26.5-21.5 
                    48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 
                    5.7-7.8 9.7-4.7 22.4 17.4 
                    52.1 39.5 154.1 113.6 21.1 
                    15.4 56.7 47.8 92.2 
                    47.6 35.7.3 72-32.8 92.3-47.6 
                    102-74.1 131.6-96.3 
                    154-113.7zM256 320c23.2.4 
                    56.6-29.2 73.4-41.4 
                    132.7-96.3 142.8-104.7 
                    173.4-128.7 5.8-4.5 
                    9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 
                    64 0 85.5 0 112v19c0 7.4 
                    3.4 14.3 9.2 18.9 30.6 
                    23.9 40.7 32.4 173.4 128.7 
                    16.8 12.2 50.2 41.8 
                    73.4 41.4z">
                  </path>
                </svg>
                <a href="mailto:help@tradetoday.io" className="text-sm 2xl:text-[13px] md:text-base hover:underline">help@tradetoday.io</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer
