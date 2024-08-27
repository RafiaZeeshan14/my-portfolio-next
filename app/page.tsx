import About from "@/components/About";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Scroll from "@/components/Scroll";
import Image from "next/image";

export default function Home() {
  return (
      <main className="h-full w-full  bg-[url('/Loop.png')] bg-no-repeat">
      <div className="flex flex-col gap-10">
        <Navbar/>
        <Banner />
        <Scroll/>
        <About/>
        {/* <About />
        <Experience />
        <Projects />
        <Footer /> */}
      </div>
    </main>
  );
}
