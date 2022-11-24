import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

function Service() {
  return (
    <>
      <section id='header'>
        <div className='my--lg-5'>
          <h1 className='text-center'> Our Services</h1>
        </div>
        <div className='container-fluid mb-5'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row gy-4'>
                {
                  Sdata.map((val, indx) => {
                    return <Card key={indx} img_src={val.img_src} title={val.title} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service