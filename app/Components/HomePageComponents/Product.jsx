import Image from "next/image"
import rice from '../../../public/images/Rectangle 10 (1).png'
import wheat from '../../../public/images/Rectangle 12.png'
import pumpkin from '../../../public/images/Rectangle 12 (1).png'
import cabbage from '../../../public/images/Rectangle 13.png'

const Product = () => {
  return (
    <div className=" py-16  flex flex-col items-center justify-center">
      <h1 className="font-bold text-[30px] md:text-[72px] md:leading-[74.88px] text-[#204E51] text-center">Our Featured Product</h1>
      <p className="md:text-[20px] mt-4 leading-[24px] text-center md:w-[540px] text-[#1E1E1E]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth Por scientie, musica.</p>
    
      <div className="flex gap-8 mt-10 flex-col  xl:flex-row w-screen xl:w-auto">
        <div className=" rounded-[25px] w-[90%] mx-auto xl:w-[281px] h-[508px] border bg-white drop-shadow-lg flex flex-col justify-center items-center gap-5">
          <Image src={rice} />
          <span className=" text-[24px] leading-[24px] text-[#204E51] text-center">Rice</span>
          <p className="w-[191px] text-center text-[16px] leading-[30px] text-[#1E1E1E]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
        </div>
        <div className=" rounded-[25px] w-[90%] mx-auto xl:w-[281px] h-[508px] border bg-white drop-shadow-lg flex flex-col justify-center items-center gap-5">
          <Image src={wheat} />
          <span className=" text-[24px] leading-[24px] text-[#204E51] text-center">Wheat</span>
          <p className="w-[191px] text-center text-[16px] leading-[30px] text-[#1E1E1E]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
        </div>
        <div className=" rounded-[25px] w-[90%] mx-auto xl:w-[281px] h-[508px] border bg-white drop-shadow-lg flex flex-col justify-center items-center gap-5">
          <Image src={pumpkin} />
          <span className=" text-[24px] leading-[24px] text-[#204E51] text-center">Pumpkin</span>
          <p className="w-[191px] text-center text-[16px] leading-[30px] text-[#1E1E1E]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
        </div>
        <div className=" rounded-[25px] w-[90%] mx-auto xl:w-[281px] h-[508px] border bg-white drop-shadow-lg flex flex-col justify-center items-center gap-5">
          <Image src={cabbage} />
          <span className=" text-[24px] leading-[24px] text-[#204E51] text-center">Cabbage</span>
          <p className="w-[191px] text-center text-[16px] leading-[30px] text-[#1E1E1E]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
        </div>
      </div>

      <span className="font-bold text-[#204E51] leading-[20.8px] text-[20px] underline mt-16 cursor-pointer">See all product</span>
    </div>
  )
}

export default Product