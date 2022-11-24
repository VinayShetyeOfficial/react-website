import React from 'react'
import web from './image/img3.svg'
import Common from './Common'

function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgSrc={web} 
        visit="/contact"
        btnName="Contact Now" />
    </>
  )
}

export default About