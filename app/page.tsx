import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Partnership from "@/components/Partnership";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
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

      <Services />
      <Technologies />
      <Mission />
    </div>
  );
}
