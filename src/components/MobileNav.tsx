import { User, GraduationCap, Brain, FolderBookmark } from "lucide-react"
import { useState, useEffect } from "react"

function MobileNav() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "academic", "skills", "projects"]
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

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "about", icon: User },
    { id: "academic", icon: GraduationCap },
    { id: "skills", icon: Brain },
    { id: "projects", icon: FolderBookmark },
  ]

  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm rounded-xl bg-gradient-to-br from-zinc-900 via-stone-950 to-slate-900 shadow-2xl shadow-black/40 text-white p-3 border-[1px] border-emerald-500">
      <ul className="flex justify-between items-center">
        {navItems.map(({ id, icon: Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`flex items-center justify-center p-3 rounded-lg transition-all duration-300 ${
                activeSection === id
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 scale-110"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Icon size={22} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileNav