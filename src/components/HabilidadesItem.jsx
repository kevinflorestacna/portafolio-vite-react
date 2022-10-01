import React from 'react'

const HabilidadesItem = ({title,icon,descripcion}) => {
  return (
    <div className='bg-slate-300 hover:bg-sky-300 dark:bg-slate-800 dark:hover:bg-rose-700 hover:-translate-y-2 transform transition p-5 rounded-md'>
        <div className='text-gray-800 dark:text-gray-300 inline-block w-6 h-8 pt-4'>
            {icon}
        </div>
        <h1 className='font-semibold underline underline-offset-8 text-lg text-gray-600 dark:text-gray-200 inline-block mb-1'>{title}</h1>
        <p className='text-md text-gray-600 dark:text-gray-300'>{descripcion}</p>
    </div>
  )
}

export default HabilidadesItem