//useMemohook is a custom React hook that can be used to memoize values or functions to optimize performance by preventing unnecessary re-renders.
// memoization is a technique to cache the results of expensive function calls and return the cached result when the same inputs occur again.
//so that they do not needed to be recalculated on every render.
//useMemo only runs when one of the dependencies has changed, which can help improve performance in certain scenarios.
// there is one more hook called useCallback which is used to memoize functions.
// This hook is useful when you want to avoid recalculating a value unless its dependencies change.
//both are similar but useMemo is used to return memoize values and useCallback is used to return memoize functions.

import React, { useState, useMemo } from 'react'

const useMemohook = () => {
    const [number, setNumber] = useState(0);
    const [counter,setCounter] = useState(0);

    function cubeNum(num){
        console.log("Calculating cube of ", num);
        return num * num * num;
    }
    // const result = cubeNum(number);
    // useMemo will only recalculate the result when 'number' changes. wether the component re-renders or not, it will not recalculate the result unless 'number' changes.
    const result = useMemo(() => cubeNum(number), [number]);


  return (
    <>
    <h1>UseMemohook</h1>
    <input style={{color : "red"}} type='Number' value={number} onChange={(e) => setNumber(Number(e.target.value))}/>
    <p>Cube of {number} is {result}</p>
    <button onClick={() => setCounter(counter + 1)}>Counter++</button>
    <h5>counter:{counter}</h5>
    </>
  )
}

export default useMemohook;