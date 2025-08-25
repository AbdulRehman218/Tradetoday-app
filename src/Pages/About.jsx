import React from 'react'
import img1 from '../assets/about1.svg'

function About() {
  return (
  <>
  <section id="about" className='relative '>
    <div className=' w-full max-w-[1440px] mx-auto md:w-[90%]  font-mono'
    style={{opacity: 1, transform: "none"}}
    >
        <div className='text-center mb-6 w-[65%] mx-auto'
          style={{opacity: 1, transform: "none"}}
          >
            <h2 className='text-lg 2xl:text-[37px] 2xl:leading-15 md:text-5xl font-semibold drop-shadow-md md:leading-[4.5rem]'>
                How “TradeToday” AI Forecasts Financial Market Trends
            </h2>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-[90%] mx-auto'
        >
            <div className='md:pt-10 md:col-span-2'
             style={{opacity: 1, transform: "none"}}>
                <img src={img1} alt="Market Trend"
                className='w-full h-full'
                style={{opacity: 1, transform: "none"}}
                 />

            </div>
            <div className='space-y-4 2xl:space-y-6 md:mt-6 pt-8'>
                <div className='space-y-2 2xl:space-y-1'>
                    <h3 className='font-semibold text-xl 2xl:text-lx font-mono'>
                        🔍 Data-Driven Precision
                    </h3>
                    <p className='text-lg 2xl:text-[16px] font-light tracking-wide'>
                        Our AI processes massive datasets, including economic news, OHLC+Volume, 60+ indicators,
                         and key support/resistance levels, to deliver highly accurate forecasts beyond human intuition.
                    </p>

                </div>
                <div className='space-y-2 2xl:space-y-1'>
                    <h3 className='font-semibold text-xl 2xl:text-xl font-mono'>
                    📊 Real-Time Market Sentiment
   
                    </h3>
                    <p className='text-lg 2xl:text-[16px] font-light tracking-wide'>
                        When you add work to your Slate calendar we 
                        automatically calculate useful insights.
                    </p>

                </div>
                  <div className='space-y-2 2xl:space-y-1'>
                    <h3 className='font-semibold text-xl 2xl:text-xl font-mono'>
                    🤖 Advanced AI Predictions
   
                    </h3>
                    <p className='text-lg 2xl:text-[16px] font-light tracking-wide'>
                        Our cutting-edge ensemble model blends machine learning and deep
                         learning for unparalleled accuracy, helping you make smarter and more informed trading decisions.
                    </p>

                </div>

            </div>

        </div>

    </div>
      <div className='py-10 mb-6 md:mb-12 w-full max-w-[1440px] mx-auto md:w-[90%] font-mono'
      style={{opacity: 1, transform: "none"}}
      >
        <div className='text-center mb-8 w-[90%] md:w-[70%] mx-auto'
        style={{opacity: 1, transform: "none"}}>
            <h2 className='text-lg 2xl:text-[39px] md:text-5xl font-semibold drop-shadow-lg md:leading-[4.5rem]'>
                Why Choose Us?
            </h2>
            <p className='text-xs 2xl:text-[14.5px] sm:text-base md:text-lg mt-1'> We focus on ergonomics and meeting you where you work.</p>
            <p className='text-xs 2xl:text-[14.5px] sm:text-base md:text-lg mt-1'> It's only a keystroke away.</p>

        </div>
        <div className='p-4 w-[95%] md:w-[80%] mx-auto'>
            <table className='min-w-full'>
                <thead className=' md:text-2xl  font-normal text-black bg-white'> 
                    <tr>
                        <th className='border 2xl:text-lg  border-[#D8D8D8] px-4 py-6'> Feature's  </th>
                        <th className='border 2xl:text-lg border-[#D8D8D8] px-4 py-6'> Trade Today  </th>
                        <th className='border 2xl:text-lg border-[#D8D8D8] px-4 py-6'> Competitors  </th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td className='border text-center px-2 md:text-xl font-medium py-12'>
                            AI & Deep Learning  </td>
                            <td className='border px-2 py-12'>
                                <div className='flex justify-center items-center h-full'>
                                      <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="text-green-600 text-2xl md:text-3xl"
                height='1em'
                width='1em'
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
              </svg>

                    </div>
                 </td>
                         <td className='border px-2 py-12'>
                             <div className='flex justify-center items-center h-full'>
                  <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="text-red-500 text-2xl md:text-3xl"
                height='1em'
                width='1em'
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
              </svg>

                </div>
                </td>
                    </tr>
                      <tr>
                        <td className='border text-center px-2 md:text-xl font-medium py-12'>
                            Real-Time Sentiment Analysis  </td>
                            <td className='border px-2 py-12'>
                                <div className='flex justify-center items-center h-full'>
                                      <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="text-green-600 text-2xl md:text-3xl"
                height='1em'
                width='1em'
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
              </svg>

                    </div>
                 </td>
                         <td className='border px-2 py-12'>
                             <div className='flex justify-center items-center h-full'>
                  <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="text-red-500 text-2xl md:text-3xl"
                height='1em'
                width='1em'
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
              </svg>

                </div>
                </td>
                    </tr>
                      <tr>
                        <td className='border text-center px-2 md:text-xl font-medium py-12'>
                            60+ Technical Indicators </td>
                            <td className='border px-2 py-12'>
                                <div className='flex justify-center items-center h-full'>
                                      <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="text-green-600 text-2xl md:text-3xl"
                height='1em'
                width='1em'
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
              </svg>

                    </div>
                 </td>
                         <td className='border px-2 py-12'>
                             <div className='flex justify-center items-center h-full'>
                  <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="text-red-500 text-2xl md:text-3xl"
                height='1em'
                width='1em'
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
              </svg>

                </div>
                </td>
                    </tr>
                      <tr>
                        <td className='border text-center px-2 md:text-xl font-medium py-12'>
                           Support/Resistance Predictions  </td>
                            <td className='border px-2 py-12'>
                                <div className='flex justify-center items-center h-full'>
                                      <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="text-green-600 text-2xl md:text-3xl"
                height='1em'
                width='1em'
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
              </svg>

                    </div>
                 </td>
                         <td className='border px-2 py-12'>
                             <div className='flex justify-center items-center h-full'>
                  <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="text-red-500 text-2xl md:text-3xl"
                height='1em'
                width='1em'
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
              </svg>

                </div>
                </td>
                    </tr>
                      <tr>
                        <td className='border text-center px-2 md:text-xl font-medium py-12'>
                           Market Trend Detection  </td>
                            <td className='border px-2 py-12'>
                                <div className='flex justify-center items-center h-full'>
                                      <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="text-green-600 text-2xl md:text-3xl"
                height='1em'
                width='1em'
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm106.5 150.5L228.8 332.8h-.1c-1.7 1.7-6.3 5.5-11.6 5.5-3.8 0-8.1-2.1-11.7-5.7l-56-56c-1.6-1.6-1.6-4.1 0-5.7l17.8-17.8c.8-.8 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2l44.4 44.4 122-122.9c.8-.8 1.8-1.2 2.8-1.2 1.1 0 2.1.4 2.8 1.2l17.5 18.1c1.8 1.7 1.8 4.2.2 5.8z"></path>
              </svg>

                    </div>
                 </td>
                         <td className='border px-2 py-12'>
                             <div className='flex justify-center items-center h-full'>
                  <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="text-red-500 text-2xl md:text-3xl"
                height='1em'
                width='1em'
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
              </svg>

                </div>
               
                </td>
                    </tr>
                </tbody>

            </table>

        </div>

      </div>

  </section>
  </>
  )
}

export default About