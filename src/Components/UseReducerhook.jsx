//usereducerhook ils similar to useState but instead of 
//provideing a state and setter function it provides a disopatch function
// it accepsts a reducer function and an initial state
//and it returns the current state and a dispatch function
// reducer function specifies how the state should change based on the action

import React from 'react'
import { useReducer } from 'react';

const UseReducerhook = () => {
  

  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'decrease':
        return {count:state.count-1}
      case 'increase':
        return {count:state.count+1}
      case 'input':
        return {count:action.payload}  
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  // useReducer returns an array with two elements

  return (
    <>
    <h1>UseReducerhook</h1>
    <h2>Count: {state.count}</h2>
    <button onClick={() => dispatch({type:'increase'})}>Increment</button>
    <button onClick={() => dispatch({type:'decrease'})}>Decrement</button>
    <br/>
    input: <input value={(state.count)} type="text" placeholder='Enter a value' onChange={(e)=>{dispatch({type:'input', payload:Number(e.target.value)})}} />
    </>
  )
}

export default UseReducerhook