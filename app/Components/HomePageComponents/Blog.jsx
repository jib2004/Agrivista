import Image from "next/image"
import shower from '../../../public/images/Rectangle 10 (2).png'
import girl from '../../../public/images/Rectangle 11.png'
import tractor from '../../../public/images/Rectangle 12 (2).png'


const Blog = () => {
  return (
    <div className=" min-h-screen max-w-[1270px] mx-auto flex flex-col md:items-center py-20">
      <h1 className=" font-bold text-[30px] md:text-[72px] md:leading-[82.08px] text-[#204E51] text-center">Our Blog</h1>
      <p className="max-w-[690px] px-2 md:p-0 leading-[24px] text-[20px] text-center text-[#767681] mt-4">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>

      <div className="flex flex-col items-center xl:items-start xl:flex-row mt-8">
        <div className='w-[90%] mt-4 xl:m-0 xl:w-[400px] flex flex-col gap-7'>
            <div className="md:w-full xl:w-[380px] xl:h-[470px] ">
              <Image src={shower} alt="shower"  className="md:w-full xl:w-[380px] xl:h-[470px] object-contain" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[32px] leading-[36.48px] font-bold text-[#204E51]">Innovations for a Greener Future</h3>
              <p className="text-[#1E1E1E] font-light text-[20px] leading-[24px]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.</p>
              <p className="text-[#204E51] text-[20px] leading-[24px] underline">Read More</p>
            </div>
        </div>

        <div className='w-[90%] mt-4 xl:m-0 xl:w-[400px] flex flex-col gap-7'>
            <div className="md:w-full xl:w-[380px] xl:h-[470px] ">
              <Image src={girl} alt="shower"  className="md:w-full xl:w-[380px] xl:h-[470px] object-contain" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[32px] leading-[36.48px] font-bold text-[#204E51]">The Power of Agricultural Analytics</h3>
              <p className="text-[#1E1E1E] font-light text-[20px] leading-[24px]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.</p>
              <p className="text-[#204E51] text-[20px] leading-[24px] underline">Read More</p>
            </div>
        </div>

        <div className='w-[90%] mt-4 xl:m-0 items-center md:items-start xl:w-[400px] flex flex-col gap-7'>
            <div className="md:w-full xl:w-[380px] xl:h-[470px] ">
              <Image src={tractor} alt="shower"  className="md:w-full xl:w-[380px] xl:h-[470px] object-contain" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-[32px] leading-[36.48px] font-bold text-[#204E51]">Cultivating Sustainable and Resilient Farms</h3>
              <p className="text-[#1E1E1E] font-light text-[20px] leading-[24px]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.</p>
              <p className="text-[#204E51] text-[20px] leading-[24px] underline">Read More</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Blog
