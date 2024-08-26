import Image from 'next/image'
import storyImage from '../../../public/images/Rectangle 10.png'

const OurStory = () => {
  return (
    <div className="md:h-screen flex flex-col xl:flex-row justify-around xl:items-center">
        <div className='xl:w-[620px] flex flex-col gap-4 px-2 xl:px-0'>
            <h1 className=" font-bold text-[40px] xl:text-[72px] md:leading-[74.88px] text-[#204E51] ">
            Our Passion for Agriculture Nurturing Growth and Sustaining the Future
            </h1>
            <p className="text-[16px] text-[#1E1E1E] leading-[30px] ">
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
            </p>

            <button className="w-[175.99px] h-[54px] cursor-pointer text-white rounded-lg bg-[#204E51] font-semibold text-center leading-[23.48px] text-[20px]">Get Started</button>
        </div>

        <div className="hidden md:block">
            <div className="w-[550px] h-[544px] relative md:mx-auto xl:mx-0">
                <Image src={storyImage} />

                <div className="absolute  leading-[37.44px] p-4 bg-[white] text-[#204E51] bottom-6 left-[50%] -translate-x-[50%] rounded-[30px] font-bold text-[36px]">Since 1976</div>
            </div>
        </div>
    </div>
  )
}

export default OurStory