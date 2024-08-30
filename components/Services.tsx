import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsFillPeopleFill,
  BsGearWideConnected,
  BsGlobe2,
  BsListTask,
  BsPersonFillGear,
} from "react-icons/bs";
import { ImChrome } from "react-icons/im";

const Services = () => {
  return (
    <div>
      <section
        id="services"
        className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] py-10"
        style={{ transform: "scale(0.9" }}
      >
        <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
          <h1 className="text-white font-semibold text-5xl sm:text-6xl">
            {" "}
            SERVICES
          </h1>
          <p className=" tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            SEE BELOW
          </p>
        </div>
        <div className="container mx-auto 2xl">
          <div className="grid  md:grid-cols-2  gap-8 mt-7">
            {/* Service Card */}
            <div className="w-full flex mb-5">
              <span className="mt-3">
                <BsGlobe2 size={50} />
              </span>
              <div className="p-3 w-full">
                <p className="text-white font-semibold text-xl">
                  RESPONSIVE DESIGN
                </p>
                <p className="text-gray-400 text-[14px]">
                  Transforming your ideas into fully responsive websites that
                  provide an optimal viewing experience across a wide range of
                  devices. I prioritize seamless navigation, intuitive layouts,
                  and striking visuals to capture user&rsquo;s attention.
                </p>
              </div>
            </div>

            {/* Second Service Card */}
            <div className="w-full  flex mb-5">
              <span className="mt-3">
                <BsFillPeopleFill size={50} />
              </span>
              <div className="p-3 w-full">
                <p className="text-white font-semibold text-xl">
                  USER INTERFACE (UI)
                </p>
                <p className="text-gray-400 text-[14px]">
                  Designing and implementing captivating user interfaces that
                  enhance user engagement and satisfaction. I focus on creating
                  interfaces that guide users through your website&rsquo;s
                  functionalities with ease.
                </p>
              </div>
            </div>

            {/* Additional Service Cards */}
            <div className="w-full flex mb-5">
              <span className="mt-3">
                <BsGearWideConnected size={50} />
              </span>
              <div className="p-3 w-full">
                <p className="text-white font-semibold text-xl">
                  PERFORMANCE OPTIMIZATION
                </p>
                <p className="text-gray-400 text-[14px]">
                  Improving the speed and performance of your website to
                  minimize loading times and create a smooth browsing
                  experience. I utilize best practices in coding and
                  optimization techniques to enhance overall site performance.
                </p>
              </div>
            </div>

            <div className="w-full flex  mb-5">
              <span className="mt-3">
                <ImChrome size={50} />
              </span>
              <div className="p-3 w-full">
                <p className="text-white font-semibold text-xl">
                  CROSS-BROWSER <br /> COMPATIBILITY
                </p>
                <p className="text-gray-400 text-[14px]">
                  Ensuring your website looks and functions consistently across
                  different browsers, ensuring a seamless experience for every
                  visitor. I conduct rigorous testing to identify and resolve
                  any compatibility issues.
                </p>
              </div>
            </div>

            <div className="w-full  flex mb-5">
              <span className="mt-3">
                <BsListTask size={50} />
              </span>
              <div className="p-3 w-full">
                <p className="text-white font-semibold text-xl">
                  INTERACTIVE COMPONENTS
                </p>
                <p className="text-gray-500 text-[14px]">
                  Integrating interactive elements such as animations, sliders,
                  and dynamic content to make your website engaging and
                  memorable. These components not only capture attention but
                  also communicate your brand message effectively.
                </p>
              </div>
            </div>

            <div className="w-full  flex mb-5">
              <span className="mt-3">
                <BsPersonFillGear size={50} />
              </span>
              <div className="p-3 w-full">
                <p className="text-white font-semibold text-xl">
                  MAINTENANCE & SUPPORT
                </p>
                <p className="text-gray-500 text-[14px]">
                  Providing ongoing support to keep your website up to date,
                  secure, and functioning flawlessly. Whether it&rsquo;s routine
                  updates or troubleshooting, I&rsquo;m dedicated to ensuring your
                  online presence remains in top condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
