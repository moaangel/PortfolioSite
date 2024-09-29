import { useState } from 'react'
import './App.css'
import MenuComp from './components/MenuComp'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      {/* <MenuComp /> */}
      <HomePage />
      <div className='h-screen w-screen'>
        <p>임시 거대한 페이지</p>
      </div>
      <div className='h-screen w-screen'>
        <p>임시 거대한 페이지2</p>
      </div>
    </>
  )
}

export default App
