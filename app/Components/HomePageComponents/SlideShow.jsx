"use client"
import  { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import './styles.css';


// import required modules
import { Scrollbar,Navigation } from 'swiper/modules';
import Image from 'next/image';
import clients from '../../../public/images/Rectangle 31.png'
import star from '../../../public/images/star_rate (1).png'
import right from '../../../public/images/Vector (5).png'
import left from '../../../public/images/Vector (6).png'


const SlideShow = () => {

    const swiper = useSwiper()
    const swiperRef = useRef();
  return (
    <div className="   md:h-[437px] w-[95%] xl:w-[1010px]  ">
       
      <Swiper
      modules={[Scrollbar,Navigation]}
      
        scrollbar={{
          hide: true,
        }}
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        
        
        className="mySwiper h-full bg-[#204E51] text-white rounded-xl md:rounded-[20px]"
      >
        <SwiperSlide >
            <div className="flex gap-4 xl:gap-8 items-center justify-center h-full p-4 xl:p-0">
            <div className="size-[150px] md:size-[231px] md:rounded-[20px] basis-1/2 md:basis-auto ">
                <Image src={clients} alt="clients" className="size-[150px] md:size-[231px] object-cover" />
            </div>

            <div className="flex flex-col gap-0 md:gap-4 basis-1/2 md:basis-auto">
                <div className="flex">
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                </div>
                <div className="md:w-[507px] flex flex-col gap-2 md:gap-6">
                    <h2 className="font-semibold md:text-[32px] md:leading-[24px]">Madeline Williamson</h2>
                    <span className="font-light text-[10px] md:text-[16px] md:leading-[24px]">Forward Creative Manager</span>
                    <p className="md:text-[20px] text-[10px] md:leading-[24px]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. </p>
                </div>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide >
            <div className="flex gap-4 xl:gap-8 items-center justify-center h-full p-4 xl:p-0">
            <div className="size-[150px] md:size-[231px] md:rounded-[20px] basis-1/2 md:basis-auto ">
                <Image src={clients} alt="clients" className="size-[150px] md:size-[231px] object-cover" />
            </div>

            <div className="flex flex-col gap-0 md:gap-4 basis-1/2 md:basis-auto">
                <div className="flex">
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                </div>
                <div className="md:w-[507px] flex flex-col gap-2 md:gap-6">
                    <h2 className="font-semibold md:text-[32px] md:leading-[24px]">Madeline Williamson</h2>
                    <span className="font-light text-[10px] md:text-[16px] md:leading-[24px]">Forward Creative Manager</span>
                    <p className="md:text-[20px] text-[10px] md:leading-[24px]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. </p>
                </div>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide >
            <div className="flex gap-4 xl:gap-8 items-center justify-center h-full p-4 xl:p-0">
            <div className="size-[150px] md:size-[231px] md:rounded-[20px] basis-1/2 md:basis-auto ">
                <Image src={clients} alt="clients" className="size-[150px] md:size-[231px] object-cover" />
            </div>

            <div className="flex flex-col gap-0 md:gap-4 basis-1/2 md:basis-auto">
                <div className="flex">
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                </div>
                <div className="md:w-[507px] flex flex-col gap-2 md:gap-6">
                    <h2 className="font-semibold md:text-[32px] md:leading-[24px]">Madeline Williamson</h2>
                    <span className="font-light text-[10px] md:text-[16px] md:leading-[24px]">Forward Creative Manager</span>
                    <p className="md:text-[20px] text-[10px] md:leading-[24px]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. </p>
                </div>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide >
            <div className="flex gap-4 xl:gap-8 items-center justify-center h-full p-4 xl:p-0">
            <div className="size-[150px] md:size-[231px] md:rounded-[20px] basis-1/2 md:basis-auto ">
                <Image src={clients} alt="clients" className="size-[150px] md:size-[231px] object-cover" />
            </div>

            <div className="flex flex-col gap-0 md:gap-4 basis-1/2 md:basis-auto">
                <div className="flex">
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                </div>
                <div className="md:w-[507px] flex flex-col gap-2 md:gap-6">
                    <h2 className="font-semibold md:text-[32px] md:leading-[24px]">Madeline Williamson</h2>
                    <span className="font-light text-[10px] md:text-[16px] md:leading-[24px]">Forward Creative Manager</span>
                    <p className="md:text-[20px] text-[10px] md:leading-[24px]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. </p>
                </div>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide >
            <div className="flex gap-4 xl:gap-8 items-center justify-center h-full p-4 xl:p-0">
            <div className="size-[150px] md:size-[231px] md:rounded-[20px] basis-1/2 md:basis-auto ">
                <Image src={clients} alt="clients" className="size-[150px] md:size-[231px] object-cover" />
            </div>

            <div className="flex flex-col gap-0 md:gap-4 basis-1/2 md:basis-auto">
                <div className="flex">
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                    <Image src={star} alt="star" className="size-4 md:size-auto"/>
                </div>
                <div className="md:w-[507px] flex flex-col gap-2 md:gap-6">
                    <h2 className="font-semibold md:text-[32px] md:leading-[24px]">Madeline Williamson</h2>
                    <span className="font-light text-[10px] md:text-[16px] md:leading-[24px]">Forward Creative Manager</span>
                    <p className="md:text-[20px] text-[10px] md:leading-[24px]">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. </p>
                </div>
            </div>
            </div>
        </SwiperSlide>

        
   
      </Swiper>
      <div  className="hidden cursor-pointer .swiper-button-prev size-[70px] rounded-full bg-white drop-shadow-lg absolute left-24 xl:flex items-center justify-center  bottom-52  z-10" onClick={() => swiperRef.current?.slidePrev()}>
        <Image src={left} />
      </div>
    <div  className="hidden cursor-pointer .swiper-button-next size-[70px] rounded-full bg-white drop-shadow-lg absolute right-24  xl:flex items-center justify-center bottom-52 z-10" onClick={() => swiperRef.current?.slideNext()}>
        <Image src={right} />
    </div>

    </div>
  )
}

export default SlideShow
