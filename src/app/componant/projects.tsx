import Link from "next/link";
import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className="bg-slate-500 bg-fixed  ">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold   title-font mb-4 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
            **  My projects **
            </h1>
          </div>
          <div className="flex flex-wrap -m-8">
            {/* projects */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/project 1.png")}
                 
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Number Guessing Game
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    NUMBER GUESSING GAME
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    Number Guessing Game: A fun and interactive game where users
                    guess a random number between 1 and 10. It provides instant
                    feedback (too high, too low, or correct) and tracks the
                    number of attempts. Includes a replay feature to reset and
                    start a new game.
                  </p>
                  <Link
                    target="-blank"
                    href={
                      "https://coading-git-hub.github.io/Number-guessing-Game/"
                    }
                  >
                    <p className="leading-relaxed text-indigo-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* projects */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/project 2.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-pink-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    ATM Machine
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    ATM MACHINE
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    "Designed and developed a functional ATM machine interface
                    using HTML, CSS, and JavaScript. The project includes PIN
                    verification, real-time balance updates, and
                    deposit/withdrawal functionality with dynamic UI
                    enhancements. This project showcases practical application
                    of frontend development skills."
                  </p>
                  <Link
                    target="-blank"
                    href={"https://coading-git-hub.github.io/Saylani-ATM/"}
                  >
                    <p className="leading-relaxed text-indigo-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* projects */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/project 3.png")}
                
                />
                <div className="px-8 py-10 relative z-10 w-full mb-4 border-4 border-gray-200 bg-pink-200 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Resume builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    RESUME BUILDER
                  </h1>
                  <p className="leading-relaxed line-clamp-3">
                    "Designed and developed a functional Resume builder
                    interface using HTML, CSS, and JavaScript. The project
                    include user information and generate resume functionality
                    with dynamic UI enhancements. This project showcases
                    practical application of frontend development skills."
                  </p>
                  <Link
                    target="-blank"
                    href={"https://milestons3.vercel.app/"}
                  >
                    <p className="leading-relaxed text-indigo-500 hover:underline">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
