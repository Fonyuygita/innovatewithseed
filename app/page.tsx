import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Internship from "@/components/Internship";
import Introduction from "@/components/Introduction";
import Mentorship from "@/components/Mentorship";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import Partnership from "@/components/Partnership";
import RecentBlogs from "@/components/RecentBlogs";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
// import Experience from "@/components/Partnership";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800 to-blue-950 min-h-screen text-red-400 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Partnership />
      {/* <Experience /> */}
      <Introduction />

      {/* <Services /> */}
      <Technologies />
      <Mentorship />
      <Mission />
      <RecentBlogs />
      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  );
}
