"use client"
import CompanyStory from "@/components/CompanyStory";
import ContactUs from "@/components/ContactUs";
import { useTheme } from "@/components/context/ThemeContext";
import Faqs from "@/components/Faqs";
import FAQSection from "@/components/FaqSection";
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
  const { theme } = useTheme();
  return (
    <div className={`${theme === 'light' ? 'bg-gray-200 ' : 'bg-gray-800 text-white '} text-red-400 overflow-x-hidden`}>

      <Hero />
      <Partnership />

      <CompanyStory />
      {/* <Experience /> */}
      <Introduction />

      {/* <Services /> */}
      <Technologies />
      <Mentorship />
      <Mission />
      <RecentBlogs />
      <Testimonials />
      <FAQSection />
      <ContactUs />

    </div>
  );
}
