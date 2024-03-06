import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RestaurantPicker from './components/restaurant-picker'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RestaurantPicker/>
    </>
  )
}

export default App
