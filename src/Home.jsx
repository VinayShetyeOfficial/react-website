import React from 'react'
import web from './image/img1.svg'
import Common from './Common'

function Home() {
  return (
    <>
      <Common
        name="Grow your business with"
        imgSrc={web} 
        visit="/service"
        btnName="Get Started" />
    </>
  )
}

export default Home