import React from 'react'
import ProyectosItem from './ProyectosItem'
import TituloSeccion from './TituloSeccion'
import work from '../data/work'

const Proyectos = () => {
  return (
    <div className='py-12'>
        <TituloSeccion id='works'>Ultimos Trabajos</TituloSeccion>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {work.map(work=>(
                <ProyectosItem
                    key={work.title}
                    imgUrl={work.imgUrl}
                    title={work.title}
                    tech={work.tech}
                ></ProyectosItem>
            ))}
        </div>
    </div>
  )
}

export default Proyectos