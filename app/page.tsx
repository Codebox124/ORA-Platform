import Image from "next/image";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Gallary from "./components/Gallary";
import Testimonial from "./components/Testimonial";
import FollowUs from "./components/FollowUs";
import Appointment from "./components/Appointment";

export default function Home() {
  return (
   <div>
    <Hero />
    <Service />
    <Gallary />
    <Testimonial />
    <FollowUs/>
    <Appointment/>
    

   </div>
  );
}
