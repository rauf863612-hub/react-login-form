import React, { useState } from 'react'

function MultiForm() {

  const [formData , setFormData] = useState(
    {
      name : '',
      email : '',
      age : ''  
      
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  } 
 
  const handlChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) =>({
      ...prev,  
      [name]: value 
    })

    )
  }

  return (
   <form onSubmit={handleSubmit}>

    <h1>Multiform React Example</h1>
    
   
    <input
      type="text" 
      name='name'
      value={formData.name}
      onChange={handlChange}
      placeholder='Enter your name'
      
      />
    <br /><br />
   
    <input 
      type="email" 
      name='email'
      value={formData.email}
      onChange={handlChange}
      placeholder='Enter your email'
      />
    <br /><br />

    <input
      type="number" 
      name='age'
      value={formData.age}
      onChange={handlChange}
      placeholder='Enter you age'
    />
    <br /><br />    

    <button type='submit'> Submit</button>
   </form>
  )
}

export default MultiForm