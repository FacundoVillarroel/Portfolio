import React, { useState } from 'react';
import mailbox from "../../img/mailbox.png"

const Contact = () => {
  const [ values, setValues ] = useState ({
    name:"",
    email:"",
    message:""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("mensaje: ", values);
    setValues({
      name:"",
      email:"",
      message:""
    })
  }

  const handleInputChange = (e) =>{
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className='contactContainer'>
      <div className='mailbox'>
        <img src={mailbox} alt="mailbox"/>
      </div>
      <div className='form'>
        <label> NAME </label>
        <input 
          type="text" 
          name='name'
          value={values.name}
          onChange={handleInputChange}
          required
        />
        <label> EMAIL </label>
        <input 
          type="email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          required
        />
        <label> MESSAGE </label>
        <textarea 
          type="textarea"
          name='message'
          value={values.message}
          onChange={handleInputChange}
          required
        />
        <button type='submit' className='buttonSubmit' onClick={handleSubmit}>
          Send Message
        </button>
      </div>
    </div>
  )
}

export default Contact