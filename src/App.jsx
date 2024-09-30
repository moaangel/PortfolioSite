import { useState } from 'react'
import './App.css'
import MenuComp from './components/MenuComp'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {

  return (
    <div className='overflow-x-hidden'>
      {/* <MenuComp /> */}
      <HomePage />
      <AboutPage />
      <div className='h-screen w-screen bg-gray-100 '>
        <p>임시 거대한 페이지2</p>
      </div>
    </div>
  )
}

export default App
