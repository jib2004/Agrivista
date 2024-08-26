import Image from "next/image"
import icon1 from "../../../public/images/Group 83.png"
import icon2 from "../../../public/images/Group 84.png"
import icon3 from "../../../public/images/Group 85.png"
import icon4 from "../../../public/images/Group 86.png"

const Footer = () => {
  return (
    <div className=" bg-[#204E51] text-white px-4 xl:px-0 py-4 md:py-32">
      <div className=" md:max-w-[1127px] flex justify-between md:mx-auto ">
      <div>
        <h3 className=" font-bold text-[36px] leading-[43.88px] ">AgriVista Farms</h3>
        <p className=" leading-[24px] font-light w-[90%] md:w-[390px] text-[20px] mt-4">Li Europan lingues es membres del sam familie. Lor separat existentie</p>
        <div className="flex gap-4 mt-10">
            <Image src={icon1}  className=" cursor-pointer"/>
            <Image src={icon2}  className=" cursor-pointer"/>
            <Image src={icon3}  className=" cursor-pointer"/>
            <Image src={icon4}  className=" cursor-pointer"/>
        </div>
      </div>

      <div className="md:flex gap-32 hidden ">

        <div className="flex flex-col gap-4">
        <h3 className=" font-bold text-[28px] leading-[34.13px]">Pages</h3>
        <ul className="flex flex-col gap-4">
          <li className="text-[20px] leading-[23.48px] cursor-pointer">Home</li>
          <li className="text-[20px] leading-[23.48px] cursor-pointer">About</li>
          <li className="text-[20px] leading-[23.48px] cursor-pointer">Product</li>
          <li className="text-[20px] leading-[23.48px] cursor-pointer">Blog</li>
        </ul>
        </div>

        <div className="flex flex-col gap-4">
        <h3 className=" font-bold text-[28px] leading-[34.13px]">About</h3>
        <ul className="flex flex-col gap-4">
          <li className="text-[20px] leading-[23.48px] cursor-pointer">Testimonials</li>
          <li className="text-[20px] leading-[23.48px] cursor-pointer">Our Service</li>
          <li className="text-[20px] leading-[23.48px] cursor-pointer">Contact Us</li>
          <li className="text-[20px] leading-[23.48px] cursor-pointer">Benefit</li>
        </ul>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Footer