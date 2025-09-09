//useCallback hook is a react hook that lets you catch a function between re-renders.
//it means when we use the useCallback hook it does not create mltiple instanse of same function when re render happens.
//instead of creating a new instance of the function, it returns the same instance of the function.

import React from 'react'
import { useState, useCallback } from 'react'
import Header from './Header'

const UseCallbackhook = () => {
  const [count, setCount] = useState(0);
  // the render happens due to referential equality as at every render a new instance of the function is 
  // created which is not equal to the previous instance as both have different memory location.
  // so we can use useCallback hook to avoid this
  // const newFn = ()=> {}

    const newFn = useCallback(() => {}, []); // it will use cached instance of the function
  // the second argument is the dependency array, if we pass an empty array it means that the function will not change
  // if the dependency array is not empty, it will change whenever the value in the array changes.

  return (
    <>
    <h1>UseCallbackhook</h1>
    <Header newFn={newFn} />
    {/* whenever you will clixk the button it will render the header which doesn't need 
    to be rendered so this can be avoided by using useCallback hook */}
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default UseCallbackhook