import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm.jsx'
import FormikForm from './components/FormikForm.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < RegistrationForm />
      <FormikForm />
    </>
  )
}

export default App
