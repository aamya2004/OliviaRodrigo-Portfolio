import React from 'react'
import Homepage from './pages/Homepage'
import SongList from './components/music/SongList'
import Music from './pages/Music'
import Gall from './pages/Gall'
import Footer from './components/Footer'

const App = () => {

  return (
    <div>
      <Homepage />
      <Music />
      <Gall />
      <Footer />
    </div>
  )
}

export default App