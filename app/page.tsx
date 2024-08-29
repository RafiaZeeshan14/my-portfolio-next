import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Scroll from "@/components/Scroll";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
      <main className="h-full w-full  bg-[url('/Loop.png')] bg-repeat">
        <Navbar/>
        <Banner />
      <div className="flex flex-col gap-16">
        <Scroll/>
        <About/>
        <TechStack/>
        <Experience />
        <Projects />
        {/* 
       
        <Footer /> */}
      </div>
    </main>
  );
}
