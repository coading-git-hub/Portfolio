import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Skills = () => {
  return (
    <div id='skills' className='bg-gray-500'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-pink-400 tracking-widest font-medium title-font mb-1">
       Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
     ** My  Skills **
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem] ">
      {/* skill */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-400 text-white font-bold flex-shrink-0">
            <IoMdCheckmarkCircleOutline />
            </div>
            <h2 className="text-pink-400 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
           <div className=' relative h-1 w-full bg-gray-400 rounded-xl'>
           <div className='absolute bg-pink-300 h-1 rounded-xl w-[100%]'></div></div>
           <p className='font-bold text-pink-400 text-right'>100%</p>
           
          </div>
        </div>
      </div>
       {/* skill */}
       <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-400 text-white font-bold flex-shrink-0">
            <IoMdCheckmarkCircleOutline />
            </div>
            <h2 className="text-pink-400 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
           <div className=' relative h-1 w-full bg-gray-400 rounded-xl'>
           <div className='absolute bg-pink-300 h-1 rounded-xl w-[90%]'></div></div>
           <p className='font-bold text-pink-400 text-right'>90%</p>
           
          </div>
        </div>
      </div>
       {/* skill */}
       <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-400 text-white font-bold flex-shrink-0">
            <IoMdCheckmarkCircleOutline />
            </div>
            <h2 className="text-pink-300 text-lg title-font font-medium">
              JavaScript/TypeScript
            </h2>
          </div>
          <div className="flex-grow">
           <div className=' relative h-1 w-full bg-gray-400 rounded-xl'>
           <div className='absolute bg-pink-300 h-1 rounded-xl w-[60%]'></div></div>
           <p className='font-bold text-pink-400 text-right'>60%</p>
           
          </div>
        </div>
      </div>
       {/* skill */}
       <div className="p-4 md:w-1/3 ml-20">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-400 text-white font-bold flex-shrink-0">
            <IoMdCheckmarkCircleOutline />
            </div>
            <h2 className="text-pink-300 text-lg title-font font-medium">
              BootStrape
            </h2>
          </div>
          <div className="flex-grow">
           <div className=' relative h-1 w-full bg-gray-400 rounded-xl'>
           <div className='absolute bg-pink-300 h-1 rounded-xl w-[80%]'></div></div>
           <p className='font-bold text-pink-400 text-right'>80%</p>
           
          </div>
        </div>
      </div>
       {/* skill */}
       <div className="p-4 md:w-1/3 ml-20">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-400 text-white font-bold flex-shrink-0">
            <IoMdCheckmarkCircleOutline />
            </div>
            <h2 className="text-pink-300 text-lg title-font font-medium">
              NextJS
            </h2>
          </div>
          <div className="flex-grow">
           <div className=' relative h-1 w-full bg-gray-400 rounded-xl'>
           <div className='absolute bg-pink-300 h-1 rounded-xl w-[50%]'></div></div>
           <p className='font-bold text-pink-400 text-right'>50%</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills
