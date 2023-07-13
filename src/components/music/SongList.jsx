import React from 'react'

const SongList = () => {
  return (
    <div className='videosContainer'> 
      <video poster='src\assets\dejavu.png' src="src\assets\dejavu.mp4" controls></video>
      <video poster='src\assets\driversLicense.png' src="src\assets\driversLicence.mp4" controls></video>
      <video poster='src\assets\vampire.png' src="src\assets\dejavu.mp4" controls></video>
      <video poster='src\assets\traitor.jpg' src="src\assets\traitor.mp4" controls></video>
      <video poster='src\assets\dejavu.png' src="src\assets\dejavu.mp4" controls></video>
    </div>
  )
}

export default SongList