import SlideShow from "./SlideShow"


const Testimonials = () => {
  return (
    <div className="md:h-screen flex flex-col items-center justify-end relative py-5 md:py-10 ">
      <h1 className="text-[#204E51] text-[30px] md:text-[72px] text-center font-bold md:leading-[82.08px]">Testimonials</h1>
      <p className="text-[#1E1E1E] md:text-[20px] leading-6 md:w-[690px] text-center mt-4 mb-8 px-2 md:p-0">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>

      <SlideShow />
    </div>
  )
}

export default Testimonials
