import React from 'react'
import './HomePage.css'
import MenuComp from '../components/MenuComp'

function HomePage() {
  const scrollNextPage = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',     
    });
  };

  return (
  <>
    <div className='h-screen w-screen relative z-50 flex box overflow-x-hidden'>
        <div className='h-full w-full absolute top-0 left-0 bg-slate-800'></div>
        <div>
            <div className='absolute w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <p className='text-6xl text-white w-full h-1/4 my-auto text-center flex justify-center items-center slide-in-left'>안녕하세요</p>
                <p className='text-6xl text-white w-full h-1/4 my-auto text-center flex justify-center items-center slide-in-right mb-2'>지웅이형 입니다</p>
                <button className='text-2xl text-white w-1/4 md:w-1/5 h-1/6 mx-auto my-auto text-center flex justify-center items-center border-2 transition-all duration-300 hover:bg-emerald-800'
                onClick={scrollNextPage}>알아보기</button>
            </div>
        </div>
    </div>
    <MenuComp />
  </>
  )
}

export default HomePage