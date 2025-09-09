//useref is used to access the DOM elements directly
// it is used to store the mutable value that does not cause re-render when it changes
// it is used to store the previous value of a state variable
// it is used to store the previous value of a prop
// it is used to store the previous value of a function
// it is used to store the previous value of a variable
// it is used to store the previous value of a object
// it is used to store the previous value of a array
// it is used to store the previous value of a class component
// it is used to store the previous value of a functional component
// it is used to store the previous value of a hook
// it is used to store the previous value of a context
// it is used to store the previous value of a reducer
// it is used to store the previous value of a store
// it is used to store the previous value of a action
import React from 'react'
import { useState, useRef, useEffect } from 'react'

const UseRefhook = () => {
  const count = useRef(0);
  const inputElement = useRef("naveen");
  //this will increment the count every time the component re-renders
  const [value, setValue] = useState(0);

  useEffect(() => {
    count.current = count.current + 1;
    //this will increment the count every time the component re-renders
    //useRef is used to store the mutable value that does not cause re-render when it changes
  });

  const btnClicked = () => {
    console.log(inputElement.current);
    inputElement.current.focus();
    inputElement.current.value = "Hello World!";
  }
  //current property of useRef is used to store the mutable value that does not cause re-render when it changes
  return (
    <>
    <h1>UseRefhook</h1>
   <button onClick={()=>setValue((prev)=> prev-1)}>Decrement</button>
   <h1>Value: {value}</h1>
   <button onClick={()=>setValue((prev)=> prev+1)}>Increment</button>
   <h1> I have rendered {count.current} times</h1>

   {/* //accessing the DOM element directly */}
   <input type="text" ref={inputElement} />
   <button onClick={btnClicked}>click me</button>
    </>
  )
}

export default UseRefhook;