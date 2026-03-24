import React, { useState } from 'react'

function SimpleForm() {


const [name, setName] = useState('') 
const [email, setEmail] = useState('') 

const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Name:' , name)
    console.log('Email:' , email)

    setName ('')
    setEmail('')
}


  return (
   <form onSubmit={handleSubmit}>

    <h1>React Form Example</h1>

    <label> Name </label>
    <input 
            type="text" 
            value= {name} 
            placeholder='Enter your name'
            onChange={(e) => setName (e.target.value)}
            />
    <br /> <br />
    
    <label> Email </label>
    <input
            type="email" 
            value= {email} 
            placeholder='Enter your email'
            onChange = {(e) => setEmail (e.target.value)}
            />
    <br />
    <br />

    <button type='submit'>Submit</button>
    <br />
    <br />
   </form>
  );
}

export default SimpleForm