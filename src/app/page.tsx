import React from 'react'
import Hero from './componant/hero'
import Contact from './componant/contact'
import Projects from './componant/projects'
import About from './componant/about'
import Skills from './componant/Skills'

const page = () => {
  return (
    <div>
        <Hero /> 
       <About/>
     <Projects />
     <Skills/>
       <Contact /> 
    </div>
  )
}

export default page
