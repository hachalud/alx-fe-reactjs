import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search.jsx'
// import { searchUsers } from "./services/githubService.js";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>GitHub User Search</h1>
       <Search />
     </>
  )
}

export default App
