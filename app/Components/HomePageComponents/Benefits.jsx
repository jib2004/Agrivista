import rightArrow from '../../../public/images/Vector (2).png'
import star from '../../../public/images/star_rate.png'
import box from '../../../public/images/Vector (3).png'
import check from '../../../public/images/Vector (4).png'
import group from '../../../public/images/groups.png'

import Image from 'next/image'

const Benefits = () => {
  return (
    <div className="xl:h-[130vh] flex flex-col justify-center">
        <div className="flex flex-col xl:flex-row xl:w-[1271px] justify-between items-center xl:mx-auto ">
      <div className="xl:w-[521px] px-2 xl:px-0">
            <h1 className="text-[30px] md:text-[72px] font-bold text-[#204E51] md:leading-[82.08px]">
            The Benefits of Choosing Our Expertise
            </h1>
            <p className="text-[#1e1e1e] leading-[24px] md:text-[20px] mt-5 mb-10">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
            <button className="bg-[#204E51] rounded-lg h-[53.14px] w-[213.5px] text-white text-[20px] font-semibold flex items-center justify-center gap-3">Learn More <Image src={rightArrow}/></button>
      </div>

      <div className="w-[95%] xl:w-[670px] md:h-[784px] mt-4 xl:m-0 text-white bg-[#204E51] rounded-[20px] flex flex-col py-2 md:py-0 gap-3 md:gap-0 items-center  justify-around">
        <div className="flex items-center gap-2 md:gap-8 w-[90%] md:w-[419px]">
            <div className="size-[100px] md:size-[125px] bg-[rgba(0,0,0,0.4)] rounded-full flex justify-center items-center">
              <Image src={star} alt="star" className=" size-12   md:size-auto "  />
            </div>
            <div>
                <h3 className="font-bold md:leading-[39px] text-[20px] md:text-[48px] mb-4">15+</h3>
                <span className="md:leading-[27px] md:text-[20px]">Years Of Experience</span>
            </div>
        </div>

        <div className="flex items-center gap-2 md:gap-8 w-[90%] md:w-[419px]">
            <div className="size-[100px] md:size-[125px] bg-[rgba(0,0,0,0.4)] rounded-full flex justify-center items-center">
              <Image src={box} alt="star" className=" size-12   md:size-auto "  />
            </div>
            <div>
                <h3 className="font-bold md:leading-[39px] text-[20px] md:text-[48px] mb-4">40+</h3>
                <span className="md:leading-[27px] md:text-[20px]">Product</span>
            </div>
        </div>

        <div className="flex items-center gap-2 md:gap-8 w-[90%] md:w-[419px]">
            <div className="size-[100px] md:size-[125px] bg-[rgba(0,0,0,0.4)] rounded-full flex justify-center items-center">
              <Image src={check} alt="star" className="  size-12   md:size-auto " />
            </div>
            <div>
                <h3 className="font-bold md:leading-[39px] text-[20px] md:text-[48px] mb-4">2,458+</h3>
                <span className="md:leading-[27px] md:text-[20px]">Satisfied Clients</span>
            </div>
        </div>

        <div className="flex items-center gap-2 md:gap-8 w-[90%] md:w-[419px]">
            <div className="size-[100px] md:size-[125px] bg-[rgba(0,0,0,0.4)] rounded-full flex justify-center items-center">
              <Image src={group} alt="star" className="  size-12   md:size-auto " />
            </div>
            <div>
                <h3 className="font-bold md:leading-[39px] text-[20px] md:text-[48px] mb-2">20</h3>
                <span className="md:leading-[27px] md:text-[20px]">Local Team Members</span>
            </div>
        </div>

      </div>

      </div>
    </div>
  )
}

export default Benefits
