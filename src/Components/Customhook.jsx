
//Custom hook always starts weith "use" and is a function that can be reused across components.

import React from 'react'
import useLocalStorage from '../hooks/UseLocalStorage';

const Customhook = () => {
  
  const [name, setName] = useLocalStorage('username', '');
  const [age, setAge] = useLocalStorage('age', 0);


  return (
    <>
    <h1>Customhook</h1>
    <input type='text' placeholder='Enter your name..' 
    value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type='number' placeholder='Enter your age..' 
    value={age} onChange={(e)=>setAge(Number(e.target.value))}/>
    <h2>Hello {name} Your age is {age}</h2>
    </>
  )
}

export default Customhook