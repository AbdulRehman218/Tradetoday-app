import React from 'react'
import img1 from '../assets/leftstar.svg'
import img2 from '../assets/rightstar.svg'
import img3 from '../assets/bottomstar.svg'
import img4 from '../assets/tradegraph.svg'

function Home({ onNavigate }) {
  const handleGetStarted = () => {
    onNavigate('login');
  };

  return (
    <>
    <section id="home"  className="relative" >
      {/* background images*/ } 
      <div className='overflow-hidden h-auto w-full'>
          <div className="absolute right-0 top-0 z-10">
            <img src={img2} alt="" 
          
             className="w-full h-auto max-w-[200px] md:max-w-[500px] 2xl:min-w-[700px]"
            />
            </div>
               <div className="absolute left-0 top-0 z-10">
            <img src={img1} alt=""
            className="w-full h-auto max-w-[200px] md:max-w-[400px] 2xl:min-w-[700px]" />
            </div>
            <div className="absolute top-147 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
            <img src={img3} alt="" className="w-full h-auto mx-auto"/></div>
            {/* Center Content */}
            <div className='relative text-center space-y-1  px-4 w-[90%] md:w-[85%] py-11.75 z-40 lg:max-w-[1400px]   mx-auto'
             style={{ opacity: 1, transform: "none" }}
            >
             <div className='pr-6 w-full md:w-[65%] lg:leading-[o.25rem] mx-auto space-y-2 md:space-y-6 2xl:space-y-10 md:mt-6'>
              <p className='text-[#A0AFBC] lg:text-[14.5px] md:text-lg font-mono uppercase'
              style={{opacity: 1, transform: "none"}}
              >#1 most trusted pakistan prediction platform</p>
              <h1 className='text-3xl md:text-7xl 2xl:text-[79px] font-bold  drop-shadow-lg leading-12 md:leading-[5.5rem]
               2xl:leading-[6.05rem] text-white font-mono'
                style={{opacity: 1, transform: "none"}}
               >
                  AI-Powered Crypto Trading Insights
              </h1>
              <p className='lg:text-[19.5px] lg:space-y-6 lg:leading-[2rem] font-mono md:text-2xl md:leading-10 text-white/90'>
              Unlock the power of AI-driven market predictions for Binance.
               Make smarter trading decisions, execute faster trades, and invest with confidence like never before.
              </p>
              <div className='flex flex-col md:flex-row gap-2  lg:-space-x-1
              items-center justify-center md:gap-4 lg:text-bold  text-[1.02rem] font-mono text-white'
               style={{opacity: 1, transform: "none"}}>
                <span>Trustpilot</span>
                <div className='inline-flex lg:text-[20px] items-center gap-1.5 sm:text-2xl'>
                  <span className='text-yellow-500'>★</span>
                  <span className='text-yellow-500'>★</span>
                  <span className='text-yellow-500'>★</span>
                  <span className='text-yellow-500'>★</span>
                  <span className='text-yellow-500'>★</span>
              
                </div>
                <span>4.8/5</span>
                <span>based on 1343 reviews</span>

              </div>
              <div className='flex flex-col md:flex-row items-center justify-center gap-3'
              style={{opacity: 1, transform: "none"}}>
                <div style={{transform:"none"}}>
                  <button className='flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-2 px-0 rounded-md transition-all 
                  duration-300 hover:bg-[#070F2B] hover:text-white shadow shadow-white bg-white text-[#070F2B] border  min-w-36'>Learn More</button>
                </div>
                <div style={{transform:"none"}}>
                  <button 
                    onClick={handleGetStarted}
                    className='flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-2 px-0 rounded-md transition-all duration-300 hover:bg-white hover:text-[#070F2B] 
                    hover:border hover:border-[#2D336B] bg-[#070F2B] text-white border border-[#2D336B] shadow shadow-white min-w-39'>Get Started</button>
                </div>
                </div>
              </div>
              <div className='mt-12 md:mt-24  relative z-10 w-full'
             >
                <img src={img4} alt="Trading Graph" 
                className='w-full  h-auto'
                style={{opacity: 1, transform: "none"}}
                 />
                
              </div>
             </div>
            </div>
      

   

    </section>
    </>
  )
}

export default Home