/** @format */

// useEffect hook is used to perform side effects in function components.
// It can be used to fetch data, update the DOM, or perform any other side effect.
// The effect function is called after every render, but you can use the dependency array to control wh
// en the effect function is called.
//and it is used to replace the componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components.
//it is used to  perform  setTimeout, setInterval, and cleanup functions.//
//the syntax of useEffect is as follows:
// useEffect(callback function, [dependencies]);
//the callback function is called after every render, and the dependencies array is used to control when the effect function is called.
//dependency is optional, if you pass an empty array, the effect function will be called only once after the initial render.
//if you pass an array with dependencies, the effect function will be called only when the dependencies change.
//if you don't pass any dependencies, the effect function will be called after every render.

import React from "react";
import { useState, useEffect } from "react";

const UseEffecthool = () => {
   const [count, setCount] = useState(0);
   

   // this id withour any dependency array, so it will run after every render and count value will change after every second
   //but if i add a empty array  it will increase only once
   // if i add any element or variable in the array and whenever the value of that variavle changes the useEffect function will be excuted
   useEffect(() => {
    const intervalId = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 2000);

    return () => clearInterval(intervalId);
   },[])
   

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}>
      <div className="card">
        <div className="card-content">
          <p className="card-title">UseEffecthook</p>
          <p className="card-para">
            I've rendered {count} times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseEffecthool;
