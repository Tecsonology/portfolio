
import opsie from '../../public/projects/opsie.png'
import calcumate from '../../public/projects/calcumate.png'
import musicquestro from '../../public/projects/musicquestro.png'
import StackIcon from 'tech-stack-icons'


const projects = [

   {
    projectName: 'Opsie Software Solutions Inc. Website',
    img: opsie,
    description: `Opsie Software Solutions is a startup technology company dedicated to helping businesses simplify, connect, and improve their operations through innovative digital solutions. Guided by its tagline, "Simple. Connected. Reliable.", the company serves as an all-in-one technology partner that supports organizations in managing their systems efficiently while enabling long-term growth.`,
    link: 'https://opsiesoftwaresolutions.com/',
    techStacks: [
       {
        icon: 'react',
        tech: 'React'
      },

       {
        icon: 'typescript',
        tech: 'Typescript'
      },

      {
        icon: 'nodejs',
        tech: 'Node.js'
      },

      {
        icon: 'mongodb',
        tech: 'MongoDB'
      },

      {
        icon: 'expressjs',
        tech: 'Express.js'
      },
      
      {
        icon: 'tailwindcss',
        tech: 'Tailwind CSS'
      },

      {
        icon: 'vscode',
        tech: 'Vs Code'
      },
    ]
  },

  {
    projectName: 'MusicQuestro - An Interactive Music Game',
    img: musicquestro,
    description: `An Engaging Music Game for Kids and Youth that can enhance pitch recognition, note memory, and more.`,
    link: 'https://musicquestro-web.vercel.app/',
    techStacks: [
        {
        icon: 'html5',
        tech: 'HTML'
      },

      {
        icon: 'css3',
        tech: 'CSS'
      },

      {
        icon: 'js',
        tech: 'Javascript'
      },
      
       {
        icon: 'react',
        tech: 'React'
      },

      {
        icon: 'nodejs',
        tech: 'Node.js'
      },

      {
        icon: 'mongodb',
        tech: 'MongoDB'
      },

      {
        icon: 'expressjs',
        tech: 'Express.js'
      },
      

      {
        icon: 'vscode',
        tech: 'Vs Code'
      },
    ]
  },

  

  {
    projectName: 'CalcuMate - Tertiary Grade Calcualtor',
    img: calcumate,
    description: `Calcumate is a clean, intuitive web app designed to help students easily calculate their semestral grades. Just input your subject scores, and Calcumate does the math—instantly and accurately.`,
    link: 'https://calcumate-semestral-grade-calculator.netlify.app/',
    techStacks: [
      {
        icon: 'html5',
        tech: 'HTML'
      },

      {
        icon: 'css3',
        tech: 'CSS'
      },

      {
        icon: 'js',
        tech: 'Javascript'
      },

      {
        icon: 'netlify2',
        tech: 'Netlify'
      },

      {
        icon: 'vscode',
        tech: 'Vs Code'
      },

     

    
    ]
  },
]

function Projects() {
  return (
    <section id='projects'>
      <div className="dark:text-white p-5 my-5">
        <h1 data-aos="fade-up" className="mb-5 font-bold text-4xl my-2 uppercase border-b-2 border-emerald-500 inline-block pb-2">Projects</h1>

        <div className="flex flex-col dark:text-white">
          {
            projects.map((item, index)=> (
              <div key={index}>
                <ProjectCard projectName={item.projectName} img={item.img} description={item.description} link={item.link} techStacks={item.techStacks} />
              </div>
            ))
          }
        </div>
      
    </div>
    </section>
  )
}

export default Projects

type TechStackProp = {
  icon: string;
  tech: string;
}


type ProjectProps = {
  projectName: string
  img: string
  description: string
  link: string
  techStacks: TechStackProp[];
}

export const ProjectCard = ({ projectName, img, description, link, techStacks }: ProjectProps) => {
  return (
    <div className="shadow-2xl rounded-md shadow-black/50 group dark:text-white relative flex flex-col overflow-hidden transition-all duration-1000  dark:bg-black/70 p-4 shadow-sm hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 my-5 dark:hover:bg-gradient-to-br from-zinc-900 via-stone-950 to-slate-900">
      
      <div className="rounded-xl aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <img 
          src={img} 
          alt={projectName} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col pt-4">
        <h3 className="text-xl font-semibold tracking-tight dark:text-white dark:text-zinc-50">
          {projectName}
        </h3>
        
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        <div className='flex flex-wrap gap-2 my-2'>
          {
            techStacks.map((item, index)=> (
              <TechStackItem key={index} techName={item.tech} Icon={item.icon} />
            ))
          }
        </div>
        
        <div  
          className="mt-4 flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <a href={link} target="_blank" className="flex justify-center items-center">
              View Project
              <svg 
                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
        </div>
      </div>
    </div>
    
  )
}


type TechItemProps = {
  techName: string;
  Icon?: string;
}

export const TechStackItem = ({ techName, Icon} : TechItemProps) => {
  return(
    <div className='flex border-1 p-2 rounded-xl'>
      <StackIcon name={Icon ? Icon : ''} className='w-5 mr-1' />

      <h1 className='text-sm'>{techName}</h1>
    </div>
  )
}