import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="aboutus" className="bg-gray-400 bg-fixed ">
      <section className="text-pink-300 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src={require("../../../public/about-image.png")}
              width={400}
              height={400}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4  text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 font-bold">
            **  About Me  **
            </h1>
            <p className="mb-8 leading-relaxed">
              " I am a passionate and dedicated web developer,
              currently honing my skills through the **Web Development course at
              Saylani Mass IT Institute**. With a strong foundation in
              technologies like HTML, CSS, JavaScript, and TypeScript, I am
              focused on creating user-friendly and dynamic web experiences". </p>
            <p>  
             "In addition, I am actively exploring the potential of cutting-edge
              technologies through the **Generative AI program at the Governor's
              House**, where I am learning to innovate and solve problems using
              AI tools and methodologies. Having completed my graduation, I am
              committed to continuous learning and growth in the tech industry.
              My portfolio reflects my journey of blending creativity with
              technical expertise to deliver impactful solutions".
            </p>
            <div className="flex justify-center mt-6">
            <a href="/CV.pdf" className = "text-xl ml-2 ">
              <button className="inline-flex text-white bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View CV
              </button></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
