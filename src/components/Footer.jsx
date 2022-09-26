import React from 'react'

const Footer = () => {
  return (
    <div className='py-5 text-center dark:text-gray-300 '>
        <p className=''>
          © Kevin Flores Chambilla{new Date().getFullYear()}. All rights reserved
        </p>
    </div>
  )
}

export default Footer