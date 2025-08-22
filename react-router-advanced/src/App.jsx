import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>
      <Routes>
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/" element={<h1>Home Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App
