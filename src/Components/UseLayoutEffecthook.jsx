// useLayoutEffect is almost identical to useEffect, but it fires synchronously after all DOM mutations — before the browser paints the screen.
// This means:
// useEffect runs after the browser repaints.
// // useLayoutEffect runs before the browser repaints, giving you a chance to read and/or write DOM measurements without flicker.
// Use useLayoutEffect when:
// You need to measure layout or DOM dimensions before the browser paints.
// You need to synchronously re-render or reposition elements based on layout.
// You're working with animations or scroll positions that need precise timing.
// ⚠️ Avoid using it unless necessary — it blocks painting and can affect performance.
//UseEffect is called after printing the dom elements 
// UseLayoutEffect is called before printing the dom elements

import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffecthook = () => {

   useEffect(()=>{//always prefer useEffect as later one can cause performance
    console.log("message from useEffect");
    
   },[])// baad me execute hoga test message se

   useLayoutEffect(()=>{
    console.log('message from useLayoutEffect');
    
   },[])// pehle execute hoga test message se

  return (
    <>
    <h1>UseLayoutEffecthook</h1>
    <h4>Tesst Message</h4>
    </>
  )
}

export default UseLayoutEffecthook