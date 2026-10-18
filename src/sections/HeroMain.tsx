import img from '../assets/heroimg.png'
import ShapeGrid from '../components/ShapeGrid'
import { useState } from 'react'
import { Mail, MailOpen } from 'lucide-react'
import logo from '../../public/logo.png'
import { FaGithub,FaLinkedin, FaInstagramSquare } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { useTheme } from '../contexts/Theme'


type TextTagType = {
  type: 'text';
  tag: 'h1' | 'div' | 'p';
  text: string;
  className: string;
};

type ButtonTagType = {
  type: 'button';
  tag: 'button';
  text: string;
  className?: string
};

type ContentItem = TextTagType | ButtonTagType;


const webContent: ContentItem[] = [
  {
    type: 'text',
    tag: 'h1',
    text: 'Hi, I am Jorge Tecson',
    className: 'text-lg font-bold',
  },
  {
    type: 'text',
    tag: 'p',
    text: 'A passionate Frontend Developer who enjoys building modern, responsive, and user-friendly web applications. I focus on creating clean interfaces and seamless user experiences using modern web technologies.',
    className: 'dark:text-white text-[#242424]',
  },
  {
    type: 'button',
    tag: 'button',
    className: 'bg-green-700 my-2 p-1 text-white',
    text: 'Contact Me',
  },
];

const TextBg = () => {
  const { theme } = useTheme()

  return (
    <>
      {[1, 2].map((item) => (
        <div key={item} className={`md:w-full select-none pointer-events-none opacity-5 my-1 md:my-2`}>
          <h1 className={`rotate-[25deg] md:rotate-0 text-center font-extrabold ${theme === 'light' ? 'text-black' : 'text-white'} tracking-[0.2em] uppercase text-[12vw] md:text-[60px] lg:text-[85px] leading-none w-full`}>
            Full-Stack Developer
          </h1>
        </div>
      ))}
    </>
  )
}

const socials = [
  {
    social: FaGithub,
    link: 'https://github.com/Tecsonology'
  },

  {
    social: SiGmail,
    link: 'mailto:tecsonprojects@gmail.com'
  },

  {
    social: FaLinkedin,
    link: 'https://www.linkedin.com/in/jorge-tecson/'
  },

  {
    social: FaInstagramSquare,
    link: 'https://www.instagram.com/klljhntcsn/'
  },
]



function HeroMain() {

  const [isImgHover, setIsImgHover] = useState(false)
  const [ btnHover, setBtnHover ] = useState(false)

  const mailIcon = !btnHover ? <Mail /> : <MailOpen />


  return (
    <div className="relative dark:bg-black bg-white overflow-hidden w-full min-h-screen flex flex-col justify-center items-center  overflow-hidden px-4 md:px-8 dark:text-white text-black">
      
      <div className={`${isImgHover && 'dark:hidden'} absolute inset-0 z-0 pointer-events-none`}>
        <ShapeGrid 
          speed={0.2}
          squareSize={40}
          direction="diagonal"
          hoverFillColor="#111"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      <div 
        style={{
          display: isImgHover ?'none' : ''
        }}
        className="absolute inset-0 z-10 flex flex-col justify-center items-center w-full select-none pointer-events-none overflow-hidden py-12">
        <div className='mt-50'>
            

            <TextBg />
            <TextBg />
            <div className='md:hidden'>
              <TextBg />
            </div>
        </div>
        <TextBg />
        <TextBg />
      </div>


      <div className="w-full max-w-6xl flex flex-col items-center justify-center min-h-screen pt-12 md:pt-24">
        
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
          
      
          <div 
            className="relative cursor-pointer group"
            onMouseEnter={() => setIsImgHover(true)}
            onMouseLeave={() => setIsImgHover(false)}
          >
            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`md:hidden flex justify-center dark:bg-transparent ${isImgHover && 'bg-white/50'} mb-2 items-center`}>
                <img data-aos="flip-left" width={100} src={logo} alt="" className='my-2' />
              </div>
             <div className="flex bg-emerald-700 md:bg-white/30 border-2 border-white/20 backdrop-blur-md   dark:bg-transparent p-1 py-3 rounded-xl flex-col md:flex-row justify-center items-center md:items-end text-[5rem] font-bold md:gap-10">

             <div className="flex flex-col justify-end md:items-end items-center">

             

              <div className='hidden md:flex'>
                <a href="mailto:tecsonprojects@gmail.com">
                  <button onMouseEnter={()=> setBtnHover(true)} onMouseLeave={()=> setBtnHover(false)} className='group rounded-xl cursor-pointer transition-all bg-emerald-700  text-white duration-1000 flex flex-row items-center dark:hover:bg-white relative z-30 hover:text-black text-sm dark:border-1 hover:border-emerald-500 font-bold p-1 px-2'><span className='mr-2 transition-all duration-1000'>{mailIcon}</span>Get in Touch</button></a>
              </div>

              

               <h1 
                className={`${isImgHover && 'text-emerald-500'} hidden md:block md:text-[0.7em] lg:text-[1em]`}
                
                >JORGE
              </h1>
             </div>

            <div className="hover:rotate-5 relative bg-black overflow-hidden rounded-2xl border-2 border-zinc-700 bg-zinc-900/20 backdrop-blur-sm transition-all duration-500 group-hover:border-emerald-500/70 group-hover:scale-[1.03] shadow-2xl">
  
              <img
                className={`w-100 ${isImgHover ? 'bg-black' : 'bg-emerald-500'}  h-auto object-contain brightness-90 contrast-110 grayscale group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out`}
                src={img}
                alt="Jorge Tecson Portfolio Hero"
              />
              
            </div>

             <div className="md:hidden flex flex-row items-center justify-center gap-5 my-5">
              <div className='relative z-30 flex justify-center items-center'>
                <a href='mailto:tecsonprojects@gmail.com' className='rounded-xl bg-green-700 text-[0.2em] flex flex-row items-center justify-center text-xl border-1 px-3 py-1 text-white'><span className='mr-2'><Mail/></span>Get in Touch</a>
              </div>
               <div className='flex justify-center items-center gap-2'>
                  {
                    socials.map((item, index)=> {
                      const Icon = item.social
                      return(
                        <a key={index} target='_blank' className='text-white relative z-30 w-7 h-7 flex justify-center items-center hover:text-emerald-500 hover:-translate-y-1' href={item.link}><Icon className='' /></a>
                      )
                    })
                  }
              </div>
             </div>

            



              <div className="flex flex-col justify-start items-start ">
                <div className='hidden md:flex gap-2'>
                  {
                    socials.map((item, index)=> {
                      const Icon = item.social
                      return(
                        <a key={index} target='_blank' className='transition-all duration-400 bg-green-700  p-2 rounded-[50%] text-white relative z-30 w-7 h-7 flex justify-center items-center hover:-translate-y-1' href={item.link}><Icon className='' /></a>
                      )
                    })
                  }
              </div>

              <h1 className={` ${isImgHover && 'text-emerald-500'} hidden md:block md:text-[0.7em] lg:text-[1em]`}

              
                >TECSON
              </h1>
              </div>

             </div>

             <div className='dark:text-white border-2 border-t-emerald-500 bg-white/70 dark:bg-transparent w-full flex flex-col md:flex-row justify-center items-center my-5 gap-2'>
              <div className="rounded-xl p-2">
                {
                  webContent.map((item, index)=> {

                    const Tag = item.tag

                    return(
                      <Tag key={index} className={item.className}>{item.text}</Tag>
                    )
                  })
                }
                
              </div>
              <div className="bg-black p-2 mx-2">
              {webContent.map((item, index) => {
                if (item.type === 'text') {
                  return (
                    <TextTag
                      key={index}
                      tag={item.tag}
                      text={item.text}
                      className={item.className}
                    />
                  )
                }

                return (
                  <ButtonTag
                    key={index}
                    tag={item.tag}
                    text={item.text}
                    className={item.className}
                  />
                )
              })}
            </div>
             </div>
        
          </div>
        </div>

      </div>
  

    </div>
  )
}

export default HeroMain


type TagProp = {
  tag: 'h1' | 'div' | 'p';
  text: string;
  className?: string;
};

export const TextTag = ({tag, text, className } : TagProp) => {

  const tagColor =  'text-blue-500'
  return (
    <h1 className='text-[0.8em] text-white'><span className={`${tagColor}`}>{`<${tag} `}<span className='text-yellow-500'>className=<span className='text-green-500'>{`"${className}"`}</span></span>{'>'}</span>{text}<span className={`${tagColor}`}>{`</${tag}>`}</span></h1>
  )
}

type ButtonTagProp = {
  tag: 'button' ;
  text: string;
  className?: string
}

export const ButtonTag = ({tag, text, className } : ButtonTagProp) => {

  const tagColor = 'text-blue-500'
  return (
    <h1 className='text-[0.7em]'><span className={`${tagColor}`}>{`<${tag} `}<span className='text-yellow-500'>className=<span className='text-green-500'>{`"${className}"`}</span></span>{'>'}</span><span className='text-white'>{text}</span><span className={`${tagColor}`}>{`</${tag}>`}</span></h1>
  )
}