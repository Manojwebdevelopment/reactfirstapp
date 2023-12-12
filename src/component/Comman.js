import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Comman(props) {
  return (
    <>
         <section id=" " className='d-flex align-items-center'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 pt-6 pt-lg-0 my-5 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                    <h1 >{props.name}
                    <strong className='brand-name'> Manoj</strong></h1>
                    <h2 className='my-3'>We are the team of talante developer making websites</h2>
                    <div className='mt-3'>
                    <NavLink to={props.visit} className='btn btn-primary'>{props.btname}</NavLink>

                    </div>
                </div>
                <div className='col-md-6 order-1 order-lg-2 d-flex justify-content-center flex-column'>
                   <img className='home_img' src={props.imgsrc} alt='rendom pic'/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
