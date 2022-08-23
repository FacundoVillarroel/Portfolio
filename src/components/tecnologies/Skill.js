import React from 'react'

const Skill = ({name, src}) => {
  return (
    <div className='skill'>
      <p>{name}</p>
      <img alt='Node.js' src={src} />
    </div>
  )
}

export default Skill