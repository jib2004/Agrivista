import React from 'react'

const TopBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center hero h-[500px] md:h-[817px] relative -z-20 !bg-[url('/images/image1.png')] bg-white bg-no-repeat bg-center bg-cover w-screen md:w-auto">
      <h1 className="text-white text-[30px] md:text-[60px] xl:text-[90px] font-bold xl:leading-[93.6px] xl:w-[1113px] text-center">
      The Role of Technology in Revolutionizing Agriculture
      </h1>
      <p className="text-[14px] md:text-[16px] mt-5 leading-[24px] md:w-[540px] text-white text-center">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
      
      <div className="mt-14 flex items-center gap-2 md:gap-12">
      <button className="w-[175.99px] h-[48px] cursor-pointer text-white rounded-lg bg-[#204E51] font-semibold text-center leading-[23.48px] text-[20px]">Get Started</button>
      <button className="w-[175.99px] h-[48px] cursor-pointer text-white rounded-lg border border-white font-semibold text-center leading-[23.48px] text-[20px]">Learn More</button>
      </div>
      

    </div>
  )
}

export default TopBanner