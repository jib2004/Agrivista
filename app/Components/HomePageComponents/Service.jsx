import Image from "next/image"
import img1 from '../../../public/images/icon.png'
import img2 from '../../../public/images/Group (3).png'
import img3 from '../../../public/images/Group (4).png'
import img4 from '../../../public/images/Group (5).png'

const Service = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 py-14">
        <h1 className="font-bold text-[72px] leading-[74.88px] text-[#204E51] text-center">Our service</h1>
        <p className="text-[#1e1e1e] leading-[24px] md:text-[24px] text-center md:w-[625px]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth Por scientie, musica.</p>

        <div className="flex gap-8 flex-col items-center xl:items-start xl:flex-row w-screen xl:w-auto">
            <div className="gap-6 w-[90%] h-[280px] xl:size-[281px] bg-white rounded-[25px] flex flex-col justify-center items-center drop-shadow-lg">
                <Image src={img1} className="size-[80px] object-cover" />
                <span className="text-center leading-[30px] text-[24px] text-[#204E51] w-[196px]">Blog and Article Writing</span>
            </div>

            <div className="w-[90%] h-[280px] xl:size-[281px] bg-white rounded-[25px] flex flex-col justify-center items-center drop-shadow-lg">
                <Image src={img2} className="size-[80px] object-cover" />
                <span className="text-center leading-[30px] text-[24px] text-[#204E51] w-[196px]">Website Content</span>
            </div>
            <div className="w-[90%] h-[280px] xl:size-[281px] bg-white rounded-[25px] flex flex-col justify-center items-center drop-shadow-lg">
                <Image src={img3} className="size-[80px] object-cover" />
                <span className="text-center leading-[30px] text-[24px] text-[#204E51] w-[220px]">Content Strategy and Consulting</span>
            </div> 
            <div className="w-[90%] h-[280px] xl:size-[281px] bg-white rounded-[25px] flex flex-col justify-center items-center drop-shadow-lg">
                <Image src={img4} className="size-[80px] object-cover" />
                <span className="text-center leading-[30px] text-[24px] text-[#204E51] w-[196px]">Social Media Management</span>
            </div>
        </div>
    </div>
  )
}

export default Service