import React from 'react'

const Navbar = () => {
  const path = window.location.pathname
  return (
    <nav className='nav'>
        <ul>
            <li id='home'>
                <a href="">Home</a>
            </li>
            <li id='music'>
                <a href="">Music</a>
            </li>
            <li id='gallery'>
                <a href="">Gallery</a>
            </li>
        </ul>
    </nav>

  )
}

export default Navbar