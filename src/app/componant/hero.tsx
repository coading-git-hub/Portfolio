"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-slate-500 bg-fixed">
      <section className="text text-pink-300 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extra-bold   lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
                {" "}
                I am
              </span>
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Kiran", "Web Developer", "Frontend Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-pink-400 mb-4"></div>
            <p className="mb-8 leading-relaxed">
              "I am a passionate web developer skilled in creating responsive
              and user-friendly websites using HTML, CSS, and JavaScript. My
              focus is on delivering clean designs and seamless functionality to
              bring creative ideas to life. Let's work together to build
              something amazing!"
            </p>
            <div className="flex justify-center">
              <Link href={"#contact"}>
                <button className="inline-flex bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 border-0 py-3 rounded-full px-6 focus:outline-none hover:bg-pink-300 text-lg text-white">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              width={700}
              height={700}
              src={require("../../../public/hero-image.png")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
