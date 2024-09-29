import React, { useState, useEffect, useRef } from 'react'

function MenuComp() {
  const [isFixed, setIsFixed] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const menuOffsetTop = menuRef.current.offsetTop;
      if (window.scrollY > menuOffsetTop) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      ref={menuRef}
      className={`bg-slate-900 left-0 right-0 transition-all duration-300 ${isFixed ? 'fixed top-0' : 'relative'}`}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between py-5 text-white'>
          <h1>SONGJIWOONG</h1>
          <nav className='flex gap-4'>
            <button>About me</button>
            <button>Skills</button>
            <button>Archiving</button>
            <button>Projects</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default MenuComp
