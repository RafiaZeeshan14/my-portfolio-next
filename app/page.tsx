import About from "@/components/About";
import Banner from "@/components/Banner";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Scroll from "@/components/Scroll";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/Loop.png')] bg-repeat bg-center ">
      <Navbar />
      <Banner />
      <Scroll />
      <div className="flex flex-col gap-y-[4.5rem]">
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Certifications />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
