import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="lg:h-4/6 h-auto flex flex-col text-center justify-center items-center relative">
        <div className="z-40 mb-auto w-full">
          <Navbar />
        </div>
        <div className="relative">
          <div className="z-10 absolute top-20 -left-44 w-2/6 h-2/6  bg-light-purple rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute left-3/4 w-96 h-96  bg-light-pink rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <div className="relative flex-grow flex flex-col justify-center items-center z-0 mx-4 sm:mx-8 md:mx-16 lg:mx-36 py-36 md:py-44 sm:py-41">
            <div className="flex sm:flex-row flex-col gap-2 mb-2 items-center z-100">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center">
                Queen's Women in Computing
              </h1>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-2xl my-1 sm:my-2 lg:my-3">
              Explore Technology and Embrace Empowerment
            </h3>
          </div>
          <Image
            src="/landing-page/hero.png"
            width={1920}
            height={900}
            alt="Hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
