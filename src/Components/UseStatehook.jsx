import React from 'react'
import { useState } from 'react'

const UseStatehook = () => {
  // const [Brand, setBrand] = useState('ferrari')
  // const [color, setcolor] = useState('Red')
  // const [variant, setvariant] = useState('Roma')
  // const [year, setyear] = useState(2023)
  // so declaring so much such state variable makes the code buly 
  // so make a single having object inside it
  const [car, setCar] = useState({
    brand: 'ferrari',
    color: 'Red',
    variant: 'Roma',
    year: 2023
  })

  const [value, setValue] = useState(0);

  const Increment = ()=>{
    setValue((item)=>item + 1);
    setValue((item)=>item + 1);
    setValue((item)=>item + 1);
    setValue((item)=>item + 1);

  }

  const Decrement = ()=>{
    setValue((item)=> item-1)
  }

  const ChangeEveryThing = ()=>{
    // setCar({brand: 'Lamborghini' })// this will replace the all things and introduce new object with brand lomborghini
    setCar((prev)=>{
      return {...prev, color:'Blue', brand:'Lomborghini'}
    })

  }

  return (
    <div>
      <h1>UseStatehook</h1>
    <h1>count : {value}</h1>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>

    <h1>My {car.brand}</h1>
    <p>It is a {car.color} {car.variant} from {car.year}</p>
    <button onClick={ChangeEveryThing}>Change</button>

    </div>
  )
}

export default UseStatehook;