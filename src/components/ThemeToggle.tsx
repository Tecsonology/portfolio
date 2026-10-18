import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useState, useEffect } from 'react'
import type { ReactElement } from 'react'


function ThemeToggle() {

    const [ themeIcon, setThemeIcon ] = useState<ReactElement>()
    const theme = localStorage.getItem('theme')

    useEffect(()=> {
    
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
          setThemeIcon(<MdDarkMode />)
        } else {
            document.documentElement.classList.remove('dark')
          setThemeIcon(<MdLightMode />)
        }
      
    
      }, [])
    

    const themeToggle = ()=> {
       
          document.documentElement.classList.toggle('dark')
          if(document.documentElement.classList.contains('dark')){
            setThemeIcon(<MdDarkMode />)
            localStorage.setItem('theme', 'dark')
          } else {
            setThemeIcon(<MdLightMode />)
            localStorage.removeItem('theme')
          } 
      
      }

  return (
    <div>
        <button data-aos='flip-down' onClick={()=> themeToggle()} className={`cursor-pointer text-white hover:scale-105 bg-yellow-500 dark:bg-red-500/30 p-2 rounded-[50%] transition-all duration-1000`}>{themeIcon}</button>
    </div>
  )
}

export default ThemeToggle
