import React from 'react'
import TituloSeccion from './TituloSeccion'
import skill from '../data/skill'
import HabilidadesItem from './HabilidadesItem'

const Habilidades = () => {
  return (
    <div className='py-12'>
      <TituloSeccion>Mis Habilidades</TituloSeccion>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
        {skill.map(skill=>(
          <HabilidadesItem 
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            descripcion={skill.descripcion}
            ></HabilidadesItem>
        ))}
      </div>
    </div>
  )
}

export default Habilidades