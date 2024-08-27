import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          As a CS student with a deep passion for software development, I am
          currently focused on mastering the MERN stack. My journey in the tech
          world includes hands-on experience with MongoDB, Express, React, and
          Node.js, allowing me to craft dynamic and responsive web applications.
          <br />
          <br />
          In my current role, I am immersed in the world of web development,
          where I leverage my skills to craft elegant and innovative solutions.
          I thrive on translating complex concepts into intuitive user
          experiences, constantly pushing the boundaries of what&#39;s possible
          in software development.
        </p>
        <div className="text-md flex justify-center py-4">
          <button className=" z-[1]  padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent ">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
