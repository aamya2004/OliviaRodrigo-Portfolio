import React from 'react'
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <div className='home'>
        <Navbar />
        <h1 className='intro'>Hey! I am Olivia Rodrigo</h1>
        <h3 id='about'>Olivia Rodrigo, the rising 
           star of the music industry, captivates
           audiences with her raw talent, relatable 
           lyrics, and emotional ballads. With hits like 
           "drivers license" and "good 4 u," she showcases her 
           versatility as a singer-songwriter, resonating with fans 
           through her vulnerability and authenticity. A force to be 
           reckoned with!'</h3>
    </div>
  )
}

export default Homepage