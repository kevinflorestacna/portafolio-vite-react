import React from 'react'

const HabilidadesItem = ({title,icon,descripcion}) => {
  return (
    <div className='bg-slate-300 hover:bg-rose-200 dark:bg-slate-800 dark:hover:bg-rose-700 hover:-translate-y-2 transform transition p-5 rounded-md'>
        <div className='text-gray-800 dark:text-gray-300 w-6 h-6 mb-3'>
            {icon}
        </div>
        <h1 className='font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1'>{title}</h1>
        <p className='text-md text-gray-600 dark:text-gray-300'>{descripcion}</p>
    </div>
  )
}

export default HabilidadesItem