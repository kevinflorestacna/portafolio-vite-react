import React from 'react'
import TituloSeccion from './TituloSeccion'
import contact from './../assets/frontend.svg'

const Contacto = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
      <div className='w-full md:w-6/12'>
          <TituloSeccion>Contacto</TituloSeccion>
          <p className='text-md text-gray-600 dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum consequuntur a laboriosam modi, aperiam perferendis inventore consequatur libero ea.</p>
          <a href='mailto:kevinflorestacna@gmail.com'
          className='block mt-3 text-md md:text-lg font-regular text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'
          >kevinflorestacna@gmail.com</a>
      </div>
      <img src={contact} alt='kevin' className='w-full md:w-6/12 rounded-lg object-cover' />
    </div>
  )
}

export default Contacto