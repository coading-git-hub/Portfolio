import Link from "next/link";
import React from "react";
import Image from "next/image";
import { WiCloudDown } from "react-icons/wi"

const Navbar = () => {
  return (
    <div className="bg-pink-300 z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           <Image
           src ={require("../../../public/logo.jpeg")}
           alt = "logo"
           width = {80}
           height = {80}/>
            <span className="ml-2 text-xl ">KAF</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center">
            <Link href = {"/"} className="mr-6 hover:text-pink-600">Home</Link>
            <Link href = {"#aboutus"} className="mr-6 hover:text-pink-600">About Us</Link>
            <Link href = {"#skills"} className="mr-6 hover:text-pink-600">Skills</Link>
            <Link href = {"#projects"} className="mr-6 hover:text-pink-600">Projects</Link>
            <Link href = {"#contact"} className="mr-6 hover:text-pink-600">Contact</Link>
          </nav>
         <a href="/CV.pdf" className = "text-xl ml-2 ">
          <button className="inline-flex items-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500  border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base mt-4 md:mt-0 ">
            
            Download CV
            <WiCloudDown />
         </button>  
         </a> 
        </div>
      </header>
    </div>
  );
};

export default Navbar;
