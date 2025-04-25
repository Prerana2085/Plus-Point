import React from 'react'
import DoctorsList from './DoctorsList'
import { Home } from './Home'
import { Footer } from './Footer'
export const Facilities = () => {
  return (
    <>
    <div><Home/></div>
    <div className="doctorslist"><DoctorsList/></div>
    {/* // <div>Explore our High class facilities for our ptients</div> */}
    {/* <div className="foot"><Footer/></div> */}
    <Footer/>
    </>
  )
}
