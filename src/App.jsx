import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessCard from './components/Vcard'
import { GridPatternLinearGradient } from './components/demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
        <GridPatternLinearGradient />
        </div>
    </>
  )
}

export default App
