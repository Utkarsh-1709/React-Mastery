
import React from 'react'
import profilePic from './assets/utkarshmaurya.jpg'

function Card() {
  return (
    <div className="card">
        <img className="card-image" src="https://lh3.googleusercontent.com/a/ACg8ocJdttiAmsGWDnlN4WBJfGaIkiMiGW3v61EMcI_I7b7fmK5l0YET=s576-c-no" alt= "profile"></img>
        {/* <img src={profilePic} alt= "profile"></img> */}
        <h2 className="card-title">Utkarsh Maurya</h2>
        <p className="card-text">CDAC PG-DAC Student</p>
    </div>
  )
}

export default Card