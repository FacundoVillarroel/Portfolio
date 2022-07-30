import React from 'react';
import videoBackground from "../../video/videoBackground.mp4"

const Landing = () => {
  return (
    <div className='landingContainer'>
      <div className='videoContainer'>
        <video width="100%" height="100%" loop autoPlay muted>
          <source src={videoBackground}/>
        </video>
      </div>
      <div className='textContainer'>
        <h1>Villarroel Facundo</h1>
        <h4>(Full-Stack Developer)</h4>
      </div>
    </div>
  )
}

export default Landing