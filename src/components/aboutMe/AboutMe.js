import React from 'react';
import programmingImg from "../../img/programmingImg.jpg"

const AboutMe = () => {
  return (
    <div className='aboutMeContainer' id='aboutMe'>
      <div className='imgProfileContainer'>
        <img src={programmingImg} className="imgProfile" alt='profile'></img>
      </div>
      <div className='descriptionContainer'>
        <h2> About Me </h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
      </div>
    </div>
  )
}

export default AboutMe