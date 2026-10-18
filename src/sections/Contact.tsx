import { FaGithub, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Contact() {
  const contactLinks = [
    {
      id: 1,
      label: 'Email',
      value: 'tecsonprojects@gmail.com',
      href: 'mailto:tecsonprojects@gmail.com',
      icon: <SiGmail className="text-xl text-red-500 group-hover:scale-110 transition-transform" />,
    },
    {
      id: 2,
      label: 'GitHub',
      value: 'github.com/tecsonology', // Replace with your username
      href: 'https://github.com/tecsonology', // Replace with your link
      icon: <FaGithub className="text-xl text-gray-400 group-hover:scale-110 transition-transform" />,
    },
    {
      id: 3,
      label: 'LinkedIn',
      value: 'linkedin.com/in/jorge-tecson', // Replace with your username
      href: 'https://www.linkedin.com/in/jorge-tecson/', // Replace with your link
      icon: <FaLinkedin className="text-xl text-blue-500 group-hover:scale-110 transition-transform" />,
    }, 
    {
      id: 4,
      label: 'Instagram',
      value: '@klljhntcsn', // Replace with your username
      href: 'https://instagram.com/klljhntcsn', // Replace with your link
      icon: <FaInstagramSquare className="text-xl text-pink-500 group-hover:scale-110 transition-transform" />,
    },
  ];

  return (
    <section id="contact" className="group bg-black text-white py-20 px-5 rounded-xl">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        <div className="text-center space-y-3">
          <h1 className="group-hover:scale-110 transition-all duration-1000 text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            <span className='text-black'>📩</span> Get in Touch
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Let's collaborate! Reach out through any of the platforms below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : '_self'}
              rel="noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                {link.icon}
              </div>
              <div className="flex flex-col truncate">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {link.label}
                </span>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors truncate">
                  {link.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;