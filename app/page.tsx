import Image from "next/image";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Gallary from "./components/Gallary";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
   <div>
    <Hero />
    <Service />
    <Gallary />
    <Testimonial />
    

   </div>
  );
}
