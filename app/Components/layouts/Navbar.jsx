"use client"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDisplay = () =>{
    setIsOpen(!isOpen);
    console.log(isOpen)
  }

  return (
    <nav className="text-[#1E1E1E] bg-white  flex justify-between pt-[60px] items-center pb-[30px] px-2 xl:px-[85px]  relative">
      <div className =" leading-[34.13px] text-[28px] font-bold xl:basis-[40%] ">
      Agrivista Farms
      </div>
      <div className={`fixed top-0 left-0 bg-white w-screen h-screen xl:w-auto xl:h-auto xl:static flex flex-col xl:flex-row xl:items-center xl:basis-[60%] pl-5 justify-between py-4 xl:py-0 xl:translate-x-0 duration-200 ${isOpen ? 'translate-x-0':' translate-x-[1000px]'}`}>
      <ul className=" flex flex-col xl:flex-row gap-7 ">
        <li className="xl:hidden"><MdClose className="size-9" onClick={handleDisplay}/></li>
        <li className={`font-semibold text-[20px] leading-[23.48px] cursor-pointer`}>Home</li>
        <li className={`font-semibold text-[20px] leading-[23.48px] cursor-pointer`}>About Us</li>
        <li className={`font-semibold text-[20px] leading-[23.48px] cursor-pointer`}>Pages</li>
      </ul>

      <div className=" flex gap-7">
        <button className=" rounded-lg h-[48px] w-[138px] bg-[#204E51] text-white text-[20px] font-semibold text-center leading-[23.48px]">Login</button>
        <button className=" rounded-lg h-[48px] w-[138px] border border-[#204E51] text-[#204E51] text-[20px] font-semibold text-center leading-[23.48px]">Sign Up</button>
      </div>
      </div>

      <div>
        <GiHamburgerMenu className="size-[30px] xl:hidden" onClick={handleDisplay}/>
      </div>
      
      </nav>
  )
}

export default Navbar