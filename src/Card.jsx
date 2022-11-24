import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({img_src, title}) {
    return (
        <div className='col-md-4 col-sm-6 mx-auto d-flex'>
            <div className="card">
                <img src={img_src} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bolder">{title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="" className="btn btn-primary mt-auto">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card