import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>GitHub User Search</h1>
       <input type="text" placeholder="Enter GitHub username" />
       <button>Search</button>
    </>
  )
}

export default App
