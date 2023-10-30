import React from "react";
import profile_photo from "../images/ayo_mj2.jpg";
import design from "../images/Group 26.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  return (
    <section className="md:grid md:grid-cols-3 text-center md:text-left sm:mt-20 lg:mt-15">
      <div className="absolute left-0 top-[7rem] w-[15rem] lg:w-[22rem]">
        <LazyLoadImage src={design} alt="design" />
      </div>
      <div className="md:absolute top-0 right-0 lg:right-[7rem] flex justify-center items-center md:block -mt-40 md:mt-0">
        <div className="bg-[#242424] h-[32rem] sm:h-[30rem] w-max flex items-end">
          <LazyLoadImage
            src={profile_photo}
            alt="Profile"
            className="h-[100%] w-[17rem] sm:w-[20rem]"
          />
        </div>
      </div>
      <div className="col-span-2 z-10 px-2 md:px-0">
        <h1 className="text-white font-bold text-4xl sm:text-6xl mt-10 md:mt-0">
          Nice to meet you! I'm{" "}
          <span className="border-b-4 border-border font-body">
            Ayoola Abdulmojeed
          </span>
          .
        </h1>
        <p className="text-[#D9D9D9] mt-5 sm:mt-10 lg:mt-6 text-lg md:text-xl sm:w-[25rem] font-bold">
          I'm a passionate frontend developer with a flair for creating engaging
          and user-friendly web experiences.
        </p>
        <div>
          <a
            className="btn mt-7 sm:mt-10 lg:mt-8 inline-block"
            href="#contact"
          >
            contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
