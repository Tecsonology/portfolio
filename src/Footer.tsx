import { FaGithub,FaLinkedin, FaInstagramSquare } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
function Footer() {
  return (
    <div className="m-10 dark:text-white mb-[15vh]">
      <div className='flex flex-row gap-2 justify-center items-center my-3'>
        <FaGithub />
        <SiGmail />
        <FaLinkedin />
        <FaInstagramSquare />
      </div>
      <div className="flex flex-col items-center">
        <p> All Rights Reserved. 2026</p>
      <p className='uppercase'>Jorge Tecson</p>
      </div>
     
    </div>
  )
}

export default Footer
