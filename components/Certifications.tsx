import Image from "next/image";
import Link from "next/link";
import React from "react";

const Certifications: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-5xl sm:text-6xl  pt-[45px]">
        CERTIFICATIONS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row gap-6  mt-7">
          <Link
            href="/certificate.jpeg"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/certificate.jpeg"
                height={150}
                width={150}
                alt="Certificate"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl ">
                  Freelance Certificate
                </p>
                <p className="text-gray-500 text-[10px]">
                Successfully completed a comprehensive freelancing course, 
                gaining skills and knowledge to excel in the freelancing industry. 
                This certification has equipped me with the tools to effectively manage projects, 
                communicate with clients, and deliver high-quality work.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="cisco2.jpeg"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/cisco2.jpeg"
                height={150}
                width={150}
                alt="Certificate"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Cisco Certificate</p>
                <p className="text-gray-500 text-[10px]">
                Completed a Cisco networking course, acquiring in-depth knowledge of network configuration,
                 troubleshooting, and security. This certification has provided me with essential skills to design,
                 implement, and manage secure and efficient network infrastructures.
                </p>
              </div>
            </div>
          </Link>
        </div> 
      </div>
    </section>
  );
};

export default Certifications;
