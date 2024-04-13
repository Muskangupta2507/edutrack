import React from 'react'
import './navbar.css'
function navbar() {
  return (
    <div className='Nav'>
        <h1 className='logo'>Edu-Track</h1>
      <ul className='navbar-ul'>
        <li>Home</li>
        <li>Students Details</li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default navbar
