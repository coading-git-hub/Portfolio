import React from 'react'
import Image from 'next/image'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/dist/client/link';

const Footer = () => {
  return (
    <div className='bg-pink-300'>
     

      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          
          <Image
           src ={require("../../../public/logo.jpeg")}
           alt = "logo"
           width = {50}
           height = {50}/>
            <span className="ml-3 text-xl">KAF</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 sm:py-2 sm:mt-0 mt-4">© 2024 KAF
            
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link className = "text-2xl hover:text-[#ad4141] text-gray-500" target='-blank'  
             href = {'https://www.linkedin.com/in/kiran-ahmedraza-1a952127b/'} >
            <FaLinkedinIn  />
            </Link>
             
            <a className="ml-3 text-gray-500 text-2xl hover:text-[#ad4141]">
            <FaGithub  />
            </a>
          </span>
        </div>
      </footer>
    
    </div>
)
}

export default Footer
