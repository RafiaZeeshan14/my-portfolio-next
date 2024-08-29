import About from "@/components/About";
import Banner from "@/components/Banner";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Scroll from "@/components/Scroll";
import Services from "@/components/Services";
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
        <Certifications/>
        <Services/>
        {/* <Footer /> */}
      </div>
    </main>
  );
}
