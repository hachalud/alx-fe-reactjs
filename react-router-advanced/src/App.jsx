import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const [count, setCount] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Post 1</Link>
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
      <Routes>
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <h1>You are already logged in.</h1>
            ) : (
              <div>
                <h1>Login Page</h1>
                <button onClick={handleLogin}>Log In</button>
              </div>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App
