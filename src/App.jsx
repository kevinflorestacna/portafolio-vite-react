import React, { useEffect, useState } from 'react'
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Habilidades from './components/Habilidades';
import HeroSection from './components/HeroSection'
import Proyectos from './components/Proyectos';

function App() {
  const [theme,setTheme]=useState();

  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  },[]);

  useEffect(()=>{
    if(theme ==='dark'){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  },[theme]);

  const handleThemeSwitch=()=>{
    setTheme(theme==='dark'? 'light': 'dark');
  }

  return (
    <>
      <button
      type='button'
      onClick={handleThemeSwitch}
      className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {theme==='dark'? '🌙':'🌞'}
      </button>
      <div className='font-inter bg-slate-200 dark:bg-slate-900'>
        <div className='max-w-5xl mx-auto w-11/12'>
          <HeroSection />
          <Habilidades />
          <Proyectos />
          <Contacto />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App