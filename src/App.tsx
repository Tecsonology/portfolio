import './App.css'
import HeroMain from './sections/HeroMain'
import Navigation from './components/Navigation'
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect, useState,  } from 'react'

import AboutMe from './sections/AboutMe'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import AcademicBackground from './sections/AcademicBackground'
import Footer from './Footer'
import MobileNav from './components/MobileNav'
import { FaGithub,FaLinkedin, FaInstagramSquare } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { User, GraduationCap, Brain, FolderBookmark } from "lucide-react"




const NavItems = [
  {
    itemName: 'About',
    id: 'about',
    Icon: User
  },

  {
    itemName: 'Academic & Work Experience',
    id: 'academic',
    Icon: GraduationCap
  },

  {
    itemName: 'Skills',
    id: 'skills',
    Icon: Brain
  },

  {
    itemName: 'Projects',
    id: 'projects',
    Icon: FolderBookmark
  }
]

function App() {

  const [activeSection, setActiveSection] = useState('about')  

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    })
  }, [])



  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'academic', 'skills', 'projects']
      const scrollPosition = window.scrollY + 300

      for (const id of sections) {
        const element = document.getElementById(id)

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])



  return (
    <div className={`relative overflow-hidden md:overflow-visible w-full  flex flex-col items-center bg-white dark:bg-gradient-to-br from-black via-zinc-900 to-neutral-900 text-black dark:text-white `}>
      
      <div className='md:hidden fixed z-100 top-10 right-5'>
        <ThemeToggle />
      </div>

      <Navigation />
      <div className="w-full flex justify-center items-center fixed bottom-0 z-100">
        <MobileNav />
      </div>

      <HeroMain />

      <div className="dark:text-white text-[#242424] w-[95%] md:w-[80%] flex flex-col md:flex-row gap-10 my-10">
        {/* Sidebar */}
        <aside className="w-full md:w-1/3 md:self-start md:sticky top-10">
          <div className="text-white  text-center md:text-left">
            
            <h1 className="dark:text-white text-[#242424] text-5xl font-extrabold">
              JORGE TECSON
            </h1>

            <p className="dark:text-white text-[#242424] mt-2 text-lg">
              Full-Stack Developer
            </p>

            <p className="my-4 dark:text-gray-300 text-[#242424]">
              I build websites and web applications with frontend and backend
              technologies.
            </p>
          </div>

          <nav className="hidden md:block dark:text-white mt-10">
            <ul className="space-y-4 dark:text-white">

              {
                NavItems.map((item, index)=> (
                    <SideNavItems key={index} itemName={item.itemName} id={item.id} Icon={item.Icon} activeSection={activeSection} />

                ))
              }

            </ul>

        
          </nav>


          <div className='flex border-t-2 py-4 justify-center md:justify-start items-center gap-3 dark:text-white mt-[40%]'>
            <a href="https://github.com/Tecsonology" target='_blank'><FaGithub size={30} className='hover:scale-120 hover:text-emerald-500 cursor-pointer' /></a>
            <a href="mailto:tecsonprojects@gmail.com" target='_blank'><SiGmail size={30} className='hover:scale-120 hover:text-emerald-500 cursor-pointer' /></a>
            <a href="https://www.linkedin.com/in/jorge-tecson/" target='_blank'><FaLinkedin size={30} className='hover:scale-120 hover:text-emerald-500 cursor-pointer' /></a>
            <a href="https://www.instagram.com/klljhntcsn/" target='_blank'><FaInstagramSquare size={30} className='hover:scale-120 hover:text-emerald-500 cursor-pointer'  /></a>
          </div>
        </aside>

        <main className="w-full md:w-2/3 bg-white/2  rounded-xl">
            <AboutMe />

            <AcademicBackground />

            <Skills />

            <Projects />

            <Contact />

            
        </main>

        

        
       
      </div>

      

      <div className='w-full flex justify-center items-center '>
        <Footer />
      </div>
      
    </div>
  )
}

export default App

import type { IconType } from 'react-icons/lib'
import Contact from './sections/Contact'
import ThemeToggle from './components/ThemeToggle'

type NavItems = {
  itemName: string;
  id: string;
  Icon: IconType;
  activeSection: string;
}

const SideNavItems = ( {itemName, id, Icon, activeSection } : NavItems ) => {

  return(
     <li
      className={`flex transition-colors duration-300 ${
        activeSection === id
            ? 'text-emerald-500'
              : ''
            }`}>
            {activeSection === id && <span className='mr-2'><Icon /></span>}
            <a href={`#${id}`}>
              {activeSection === id && <span>{'< '}</span>}
              {itemName}
              {activeSection === id && <span>{' />'}</span>}
            </a>
      </li>
  )
}