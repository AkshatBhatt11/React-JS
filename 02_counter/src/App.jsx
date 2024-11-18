import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  //let counter = Math.floor(Math.random() * 10 + 1)

  const addValue = () => {
    if (counter >= 20) {
      //console.log('Value is greater than 20');
      setCounter(counter)
    }
    //console.log("clicked ", counter);
    //counter  = counter + 1
    else {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter <= 0) {
      //console.log('Value is less than 0');
      setCounter(counter)
    }
    //console.log("clicked ", counter);
    //counter  = counter - 1
    else {
      setCounter(counter - 1)
    }
  }

  return (<>
    <h1>React Hooks with vite project</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value: {counter}</button>

    <br />

    <button
    onClick={removeValue}
    >Remove value: {counter}</button>
    </>)
}

export default App