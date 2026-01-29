import { useState } from 'react'
import './App.css'
import Accordion from './demos/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <div>Accordion</div>
    <Accordion />
   </div>
  )
}

export default App
