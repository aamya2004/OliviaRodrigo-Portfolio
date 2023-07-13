import React from 'react'
import SongList from '../components/music/SongList'


const Music = () => {
  return (
    <div className='music'>
        <div className='musicCol'>
            <h1 className='heading'>Music</h1>
        </div>
        <SongList />
    </div>
  )
}

export default Music