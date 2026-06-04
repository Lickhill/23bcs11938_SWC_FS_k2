import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const[buttonClicks,setButtonClicks] = useState(1)

  return (
    <>
      <h1>{count}</h1>
      
      <button onClick={() => {
        
        setButtonClicks(buttonClicks + 1)
        if(buttonClicks % 3 === 0){
          setCount(2 * count)
        }
      }}>Increment</button>
    </>
  )
}

export default App
