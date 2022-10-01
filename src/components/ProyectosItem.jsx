import React from 'react'


const ProyectosItem = ({imgUrl, title, tech,urldemo,urlgit}) => {
  return (
    <div className='bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden'>
        <img src={imgUrl} alt={title} className="w-full h-36 md:h-48 object-cover"/>
        <div className='text-gray-600 dark:text-gray-300 p-5 w-full '>
            <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold '>{title}</h3>
            <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>{tech.map(item=>(
                <span key={item}
                    className="inline-block px-2 py-1 hover:bg-green-400 bg-slate-200 dark:bg-slate-900"
                >{item}</span>
            ))}</p>
            <div className='text-white flex flex-wrap gap-2 flex-row items-center place-content-around text-xs md:text-sm py-1 px-1 mt-3'>
                <a className='rounded-md bg-slate-700 px-4 py-2 hover:bg-rose-500 dark:md:hover:bg-rose-600' href={urldemo} target="_blank">Visitar Sitio Demo</a>
                <a className='rounded-md bg-slate-700 px-4 py-2 hover:bg-rose-500 dark:md:hover:bg-rose-600' href={urlgit} target="_blank">Ir a Git Hub</a>
            </div>
        </div>
    </div>
  )
} 

export default ProyectosItem