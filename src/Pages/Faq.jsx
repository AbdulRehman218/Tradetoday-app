import React, { useState } from 'react';
import img from '../assets/globe.svg'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = {
    market: [
      {
        question: "Can I request an addition of a new token?",
        answer: "Yes, you can request a new token addition by submitting a request through our official platform."
      },
      {
        question: "What is blockchain technology?",
        answer: "Blockchain is a distributed, immutable ledger that facilitates the process of recording transactions and tracking assets in a network."
      },
      {
        question: "What is Bitcoin?",
        answer: "Bitcoin is the first decentralized cryptocurrency that uses peer-to-peer technology to operate with no central authority."
      },
      {
        question: "Who created Bitcoin?",
        answer: "Bitcoin was created by an unknown person or group of people using the name Satoshi Nakamoto."
      },
      {
        question: "What is cryptocurrency?",
        answer: "Cryptocurrency is a digital or virtual form of currency that uses cryptography for security and operates on decentralized networks based on blockchain technology."
      }
    ],
    order: [
      {
        question: "How to Order cryptocurrency wallet?",
        answer: "You can order a cryptocurrency wallet through our platform by selecting your preferred wallet type and completing the checkout process."
      },
      {
        question: "How does cryptocurrency wallet work?",
        answer: "A cryptocurrency wallet stores your public and private keys, interacts with various blockchains, and enables you to send and receive digital currency."
      },
      {
        question: "How many devices can I login my Crypto account to?",
        answer: "You can log in to your crypto account on up to 3 devices simultaneously for security reasons."
      }
    ]
  };

  return (
   <>
   <section id="faqs" className='relative '>
    <div className='py-16 text-white font-mono w-full max-w-[1440px] mx-auto'>
        <div className='text-center'>
            <h3 className='text-lg 2xl:text-[39px] md:text-5xl font-bold'>
              FAQ's
            </h3>
        </div>
        <div className='w-full md:w-[80%] lg:w-[60%] mx-auto p-4'>
            <h1 className='mt-5 ml-3 font-semibold text-lg'>
               Market
            </h1>
            <div className='mt-2 mb-5 '>
              {faqData.market.map((item, index) => (
                <div key={index}>
                  <div className='text-white text-md'>
                    <button 
                      className='w-full px-4 py-2 2xl:py-4 text-left rounded-xl cursor-pointer transition-all duration-300 font-bold flex justify-between items-center text-white border-gray-300'
                      onClick={() => toggleAnswer(`market-${index}`)}
                    >
                      {item.question}
                      <svg
                        className={`transition-transform duration-300 ${activeIndex === `market-${index}` ? 'transform rotate-180' : ''}`}
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height='1em'
                        width='1em'
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${activeIndex === `market-${index}` ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="px-4 py-3 text-gray-300 text-lg font-normal">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                  <hr className='my-4 '/>
                </div>
              ))}
            </div>
            
            <h1 className='mt-7 ml-3 font-semibold text-xl'>
                Order
            </h1>
            <div className='mt-4'>
              {faqData.order.map((item, index) => (
                <div key={index}>
                  <div className='text-white text-md'>
                    <button 
                      className='w-full px-4 py-2 2xl:py-4 text-left rounded-xl cursor-pointer transition-all duration-300 font-bold flex justify-between items-center text-white border-gray-300'
                      onClick={() => toggleAnswer(`order-${index}`)}
                    >
                      {item.question}
                      <svg
                        className={`transition-transform duration-300 ${activeIndex === `order-${index}` ? 'transform rotate-180' : ''}`}
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height='1em'
                        width='1em'
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${activeIndex === `order-${index}` ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="px-4 py-3 text-gray-300 text-lg font-normal">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                  <hr className='my-4 '/>
                </div>
              ))}
            </div>
        </div>
    </div>
    <div className='text-white py-3 w-full max-w-[1440px] font-mono mx-auto'>
        <div className='flex flex-col md:flex-row w-[90%] md:w-[80%] mx-auto items-center space-y-10'>
            <div className='flex justify-center md:w-[30%]'>
                <div className='md:w-full w-1/2'>
                 <img src={img} alt="Bitcoin Globe" />
                </div>

            </div>
             <div className=' text-white p-5 md:p-10 rounded-lg w-full md:w-[70%] space-y-4 flex-1 md:mr-20'>
                 <p className='class="text-xs 2xl:text-lg font-semibold uppercase tracking-wide"'>
                    Start Now
                 </p>
                 <h2 className='text-3xl md:text-4xl 2xl:text-4xl font-bold leading-tight'>
                        Sign up to learn more
                 </h2>
                 <p className='text-sm 2xl:text-md  leading-relaxed'>
                    Join 
                    <span className='ml-2 font-meduim'>
                    Tradetoday
                    </span>
                     and gain access to exclusive AI-driven trading insights, real-time market analysis,
                      and smart risk management strategies.
                 </p>
                 <ul className='space-y-3 2xl:space-y-4 text-sm 2xl:text-[17px]'>
                    <li className='flex items-center gap-2'>
                         <svg
                      
                      stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        className='text-[#464646] text-lg flex-shrink-0'
                        viewBox="0 0 512 512"
                        height='1em'
                        width='1em'
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                      </svg>
                      <span>
                        Get accurate AI-powered predictions
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                         <svg
                      
                      stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        className='text-[#464646] text-lg flex-shrink-0'
                        viewBox="0 0 512 512"
                        height='1em'
                        width='1em'
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                      </svg>
                      <span>
                        Receive real-time buy/sell signals
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                         <svg
                      
                      stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        className='text-[#464646] text-lg flex-shrink-0'
                        viewBox="0 0 512 512"
                        height='1em'
                        width='1em'
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                      </svg>
                      <span>
                        Stay ahead with market trend alerts
                      </span>
                    </li>
                    <li className='flex items-center gap-2'>
                         <svg
                      
                      stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        className='text-[#464646] text-lg flex-shrink-0'
                        viewBox="0 0 512 512"
                        height='1em'
                        width='1em'
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                      </svg>
                      <span>
                        Learn expert trading strategies
                      </span>
                    </li>
                   

                 </ul>
                 <div className='flex flex-col max-w-md mt-6'>
                    <div className='flex overflow-hidden rounded border border-white'>
                        <input type="email" placeholder='Enter your email'
                        className='flex-grow px-2 py-2 bg-white text-black placeholder-gray-500 focus:outline-none rounded-l' />
                        <button className='bg-[rgb(2,21,49)] text-white px-6 py-2 font-semibold hover:bg-white cursor-pointer hover:text-black transition'>
                            Subscribe
                        </button>


                    </div>

                 </div>

             </div>
        </div>

    </div>
   </section>
   </>
  );
};

export default Faq;