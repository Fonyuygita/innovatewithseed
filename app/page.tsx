import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-light-300 h-screen text-red-400">
      <Navbar />
      <Hero />
    </div>
  );
}
