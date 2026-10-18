
const educationData = [
  {
    title: "Full-Stack Developer (INTERNSHIP)",
    school: "Opsie Software Solutions Inc.",
    year: "February - June 2026",
  },
  {
    title: "Bachelor of Science in Information Technology (Tertiary)",
    school: "STI College Pasay-Edsa",
    year: "2022-2026",
  },
  {
    title: "Science, Technology, Engineering, and Mathematics (Senior High School)",
    school: "Manila Tytana Colleges",
    year: "2016-2018",
  },
  {
    title: "Secondary Education",
    school: "Pasay City East High School",
    year: "2012-2016",
  },
  {
    title: "Primary Education",
    school: "Maricaban Elementary School",
    year: "2006-2012",
  },
];

function AcademicBackground() {
  return (
    <section id="academic">
      <div className="
        dar:text-white p-5 my-5">
      <h1 data-aos="fade-up" className="font-bold text-4xl my-2 uppercase border-b-2 border-emerald-500 inline-block pb-2">Academic & Work Experience</h1>
      {
        educationData.map((item, index)=> (
          <div data-aos="fade-right" key={index} className="">
            <EducCard title={item.title} school={item.school} year={item.year} />
          </div>
        ))
      }
    </div>
    </section>
  )
}

export default AcademicBackground

type EducCArdProps = {
  title: string
  school: string
  year: string
}

export const EducCard = ({title, school, year } : EducCArdProps)=> {
  return(
    <div className="w-full flex flex-col justify-center my-5">
      <div className="flex flex-row  gap-3">
        <div className="rounded-[50%] bg-emerald-500/50 w-4 h-4"></div>
        <p className="font-thin">{year}</p>
      </div>
      <div className="px-4 ml-2 border-l-3">
        <h1 className="font-bold">{title}</h1>
        <p className="font-thin">{school}</p>
      </div>
    </div>
  )
}
