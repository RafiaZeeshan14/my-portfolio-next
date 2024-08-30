import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience" className="py-10" >
      <h2 className="text-white font-semibold text-center text-5xl sm:text-6xl   pt-[45px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/People.svg"}
              height={30}
              width={30}
              alt={"experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Packr /</span> Front-End Developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            March 2024 - July 2024, Karachi
          </p>
        </div>

        <p className="text-gray-300 pt-5">
        I started my journey as a Junior Front-End Developer at Team Fab,
         where I worked on developing full-stack websites, focusing solely on front-end development.
          I gained hands-on experience in building and optimizing user interfaces using modern frameworks and libraries
           like Chakra UI, Next.js, and Next UI. 
           My responsibilities included designing and developing fully responsive web 
           components that ensured a seamless user experience across all devices.
          <br />
          <br />
          As a Web Developer , I have gained strong command over front-end development. My experience has been rewarding, 
          allowing me to build dynamic and responsive web and mobile applications effectively.
        </p>
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
           Next JS
          </div>
        
      </div>
    </section>
  );
};

export default Experience;
