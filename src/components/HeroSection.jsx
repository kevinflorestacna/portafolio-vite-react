import React from 'react'
import heros from './../assets/herosection.svg'

const HeroSection = () => {
  return (
    <div className='flex items-center justify-center flex-row py-20 md:flex-col'>
        <div className='text-center grid grid-cols-1 md:grid-cols-2 gap-5'>
          <img src={heros}></img>
            <div className='flex justify-center flex-col'>
            <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500'>Yo soy Kevin Osmar Flores Chambilla</h1>
            <p className='text-base md:text-xl max-w-2xl mb-3 text-gray-600 dark:text-gray-300'>Estudio Programacion Web (Desarrollador Front-End)</p>
            <a href='#' className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-rose-700 md:text-md'>Contactame</a>
        </div>
        </div>
    </div>
  )
}

export default HeroSection