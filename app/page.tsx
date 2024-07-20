import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
// import Experience from "@/components/Partnership";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-light-300 min-h-screen text-red-400 overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <Experience /> */}
      <Introduction />
      <Services />
    </div>
  );
}
