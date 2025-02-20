import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
function App() {
  return (
    <div className='realtive w-full bg-zinc-500 h-screen'>
      <Background /> 
      <Foreground />
    </div>
  )
}

export default App