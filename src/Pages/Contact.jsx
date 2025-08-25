import React from 'react'

function Contact() {
  return (
    
    <>
    <section id='contact' className='relative mt-17 mb-8 '>
        <div className='font-mono py-5 px-4'>
            <div className='max-w-[624px]  mx-auto'>
                <h2 className='text-[1.83rem] font-bold text-white mb-5 text-center tracking-wider'>
                Get in Touch with Us!
                </h2>
                <form className='space-y-4.5'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6.5'>
                        <div className='flex flex-col space-y- relative'>
                            <input type="text" name='first_name'
                            placeholder='Enter first name'
                            className='bg-white text-gray-900  2xl:text-[16] px-4 py-2.5 2xl:py-[12.75px] rounded-md focus:outline-none placeholder-gray-500 ' />

                        </div>
                        <div className='flex flex-col space-y-2 relative'>
                            <input type="text" name='last_name'
                            placeholder='Enter last name'
                            className='bg-white text-gray-900 2xl:text-[16px] px-4 py-2.5 2xl:py-[12.75px] rounded-md focus:outline-none placeholder-gray-500 ' />

                        </div>
                        <div className='flex flex-col space-y-2 relative'>
                            <input type="email" name='email'
                            placeholder='Enter your email'
                            className='bg-white text-gray-900 2xl:text-[16px] px-4 py-2.5 lg:py-[12.75px] rounded-md focus:outline-none placeholder-gray-500 ' />

                        </div>
                        <div className='flex flex-col space-y-2 relative'>
                            <input type="tel" name='phine_number'
                            placeholder='+1 866 123 4567'
                            className='bg-white text-gray-900 2xl:text-[16px] px-4 py-2.5 2xl:py-[12.75px] rounded-md focus:outline-none placeholder-gray-500 ' />

                        </div>

                    </div>
                    <div className='mt-8'>
                        <textarea name="message" placeholder='Message'
                        className='w-full p-4 bg-white 2xl:text-[16px] text-gray-700 rounded-lg border-2
                         border-gray-300 focus:outline-none focus:border-white transition-colors h-32.5 resize-none' ></textarea>

                    </div>
                    <button className='flex items-center justify-center cursor-pointer gap-2 font-semibold font-mono py-[8px] px-5.5 rounded-md transition-all 
                    duration-300 hover:bg-[#070F2B] hover:text-white shadow shadow-white bg-white text-[#070F2B] border  '>
                       Send Message
                       <span>
                            <svg
                      
                      stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        
                        viewBox="0 0 24 24"
                        height='1em'
                        width='1em'
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill='none' d="M0 0h24v24H0V0z"></path>
                        <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
                      </svg>
                       </span>
                    </button>
                </form>
            </div>

        </div>

    </section>
    </>
  )
}

export default Contact