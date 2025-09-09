import { useState } from 'react'
import './App.css'
import UseStatehook from './Components/UseStatehook'
import UseEffecthool from './Components/UseEffecthool'
import UseRefhook from './Components/UseRefhook';

import UseMemohook from './Components/useMemohook';
import UseCallbackhook from './Components/UseCallbackhook';
import UseReducerhook from './Components/UseReducerhook';
import UseLayoutEffecthook from './Components/UseLayoutEffecthook';
import Customhook from './Components/Customhook';
import Profile from './Components/profile';
import Footer from './Components/Footer';

function App() {
  // const counter = useState(0)[0];
  // const setCounter = useState(0)[1]
  // console.log(counter);
  // console.log(setCounter);

  //so we can store these two values in a array
  // const [counter, setCounter] = useState(0);
  
  
  // console.log(counter);//gives two elements array

  const [color, setColor]= useState('red');
  
   

  // let color = 'red';
  const changeColor = ()=>{
    setColor('blue')
    // console.log(color);
    
  }
  

  return (
    <>
      <div>
        <UseStatehook />
        <p>My favourite color is {color}</p>
       <button onClick={changeColor}> Blue </button>
        </div>
        <UseEffecthool/>
        <UseRefhook /><br /><br />
        <UseMemohook />
        <UseCallbackhook />
        <div className='profile'>
          <h1>UseContext Hook</h1>
          <Profile />
          <Footer />
        </div>

        <UseReducerhook />
        <UseLayoutEffecthook />
        <Customhook />

       
    </>
  )
}

export default App;
