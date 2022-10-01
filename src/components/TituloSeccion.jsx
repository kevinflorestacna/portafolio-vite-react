import React from 'react'

const TituloSeccion = ({children,id}) => {
  return (
    <h1 id={id && id}
    className="text-3xl text-center underline underline-offset-8 font-bold mb-5 text-rose-700 dark:text-rose-500">
        {children}
    </h1>
  )
}

export default TituloSeccion