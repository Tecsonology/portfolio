import laptop from '../assets/laptop.png'
import me from '../assets/Me.jpg'
import me2 from '../assets/me2.png'

function AboutMe() {
  return (
    <section id='about'>
      <div className="text-center md:text-left dark:text-white  px-5 py-10 max-w-5xl mx-auto flex flex-col md:flex-col items-center gap-10">
      
      <div className="flex-1 space-y-6">
        <h2 data-aos="fade-up" className="text-4xl font-bold border-b-2 border-emerald-500 pb-2 inline-block">
          About Me
        </h2>
        
        <p data-aos="fade-right" className="text-[#242424] dark:text-white leading-relaxed">
          I graduated Bachelor of Science in Information Technology at STI College Pasay-Edsa. I am committed to delivering the highest standards of discipline, professionalism, and excellent service, 
          supported by strong moral character and proven performance management skills to contribute effectively.
        </p>

    

      </div>

      <div className="flex flex-wrap flex-col md:flex-row gap-3">
        <img 
          src={laptop} 
          alt="Laptop displaying code" 
          className="w-full md:w-60 rounded-lg shadow-lg object-contain transform hover:scale-105 transition-transform duration-300"
        />
         <img 
          src={me} 
          alt="Laptop displaying code" 
          className="w-full object-cover md:w-60 rounded-lg shadow-lg object-contain transform hover:scale-105 transition-transform duration-300"
        />
         <img 
          src={me2} 
          alt="Laptop displaying code" 
          className="w-full object-cover md:w-60 rounded-lg shadow-lg object-contain transform hover:scale-105 transition-transform duration-300"
        />
   
      </div>

    </div>
    </section>
  )
}

export default AboutMe