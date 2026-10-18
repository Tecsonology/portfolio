import  {  useState } from 'react'
import {  Eye } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import logo from '../../public/logo.png'


const navItems = [
  {
    navName: 'Home',
    link: '/'
  },

  {
    navName: 'About',
    link: '#about'
  },

  {
    navName: 'Projects',
    link: '#projects'
  },
]


function Navigation() {


  const [isOpen, setIsOpen] = useState(false)



  return (
    <nav className={`bg-white shadow-lg dark:bg-gradient-to-br dark:from-zinc-900 via-stone-950 to-slate-900 hidden md:block absolute left-1/2 -translate-x-1/2 top-3 w-[92%] md:w-[70%] lg:w-[60%]  text-white md:flex flex-col md:flex-row md:items-center justify-between py-4 px-6 md:px-8 rounded-2xl md:rounded-3xl z-50 border border-white/10 dark:backdrop-blur-md transition-all duration-300`}>
      
      <div className="flex items-center justify-between w-full md:w-auto">
        <img width={100} src={logo} alt="" />
        
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-1 block md:hidden focus:outline-none opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-white rounded-full transition-transform duration-300 origin-left ${isOpen ? 'rotate-45' : ''}`} />
            <span className={`h-0.5 w-full bg-white rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-white rounded-full transition-transform duration-300 origin-left ${isOpen ? '-rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`w-full md:w-auto transition-all duration-300 overflow-hidden md:overflow-visible ${isOpen ? 'max-h-40 opacity-100 mt-4 md:mt-0' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}`}>
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center font-medium text-sm tracking-widest text-zinc-400">
         
          {
            navItems.map((item, index)=> (
              <a key={index} href={item.link}><li className='cursor-pointer hover:text-emerald-500 dark:hover:text-white transition-colors uppercase'>{item.navName}</li></a>
            ))
          }
        </ul>
      </div>

      <div className='flex flex-row justify-center items-center gap-2'>
        <div className='group '>
              <a href="/tecsonology/Resume.pdf" target='_blank' className='hidden md:block'>
            <div className="hover:bg-emerald-600 transtion-all duration-1000 hover:text-white cursor-pointer flex flex-row justify-center items-center text-xs tracking-widest font-bold text-[#12d4b4] border border-[#12d4b4]/30 px-3 py-1 rounded-full bg-[#12d4b4]/10">
            <Eye />
            <span className="ml-2">
              View CV
            </span>
          </div>   
          </a>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
      
      
    </nav>
  )
}

export default Navigation