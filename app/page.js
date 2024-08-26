import Benefits from "./Components/HomePageComponents/Benefits";
import Blog from "./Components/HomePageComponents/Blog";
import Call from "./Components/HomePageComponents/Call";
import HeroSection from "./Components/HomePageComponents/HeroSection";
import OurStory from "./Components/HomePageComponents/OurStory";
import Product from "./Components/HomePageComponents/Product";
import Service from "./Components/HomePageComponents/Service";
import Testimonials from "./Components/HomePageComponents/Testimonials";


export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <HeroSection />
      <OurStory />
      <Service />
      <Product />
      <Call />
      <Benefits />
      <Testimonials />
      <Blog />
    </div>
  );
}
