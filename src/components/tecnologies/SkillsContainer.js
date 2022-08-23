import React from 'react';
import Skill from './Skill';

const SkillsContainer = () => {
  return (
    <div id='skills'>
      <h2>My Skills</h2>
      <div className='skillsContainer'>
        <Skill name="Node.js" src='https://cdn.svgporn.com/logos/nodejs-icon.svg'/>
        <Skill name="React.js" src='https://images.ctfassets.net/6o5kem4ji7ya/1a1byPqzPboZKCJYxGgQLt/c64197025a3f472acab240ba1ed203df/React-icon.svg'/>
        <Skill name="HTML5" src= 'https://cdn.svgporn.com/logos/html-5.svg'/>
        <Skill name="CSS" src= 'https://images.ctfassets.net/6o5kem4ji7ya/2v3BEtLnExaG88FoJ2XiI6/4ca2ceab139398c8a218589c4c9c7b01/CSS3_logo_and_wordmark.svg'/>
        <Skill name="JavaScript" src= 'https://images.ctfassets.net/6o5kem4ji7ya/67YpegjpKxwgSZ7irysaun/208d52b80ff5a1d6240a527a5daab550/logo-javascript.svg'/>
        <Skill name="Firebase" src= 'https://images.ctfassets.net/6o5kem4ji7ya/53VGw0iHFKPSLBU8U3WIHd/b7bbbaa4fc1bd0b58401d2af42de80e3/firebase-icon.svg'/>
        <Skill name="Heroku" src= 'https://cdn.svgporn.com/logos/heroku-icon.svg'/>
        <Skill name="Git" src= 'https://cdn.svgporn.com/logos/git-icon.svg'/>
        <Skill name="Bootstrap" src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png'/>
        <Skill name="MongoDB" src= 'https://cdn.svgporn.com/logos/mongodb-icon.svg'/>
        <Skill name="GitHub" src= 'https://images.ctfassets.net/6o5kem4ji7ya/5pq55S0jcRUdBpJddnx18G/c9fd7cc6162a5fe6c19a427e91090169/Octicons-mark-github.svg'/>
        <Skill name="Sass" src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png'/>
        <Skill name="MySQL" src= 'https://cdn.svgporn.com/logos/mysql.svg'/>
      </div>
    </div>
  )
}

export default SkillsContainer