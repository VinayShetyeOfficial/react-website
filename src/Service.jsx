import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

function Service() {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Our Services d</h1>
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
    </>
  )
}

export default Service