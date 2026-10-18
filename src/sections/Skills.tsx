import type React from "react";
import StackIcon from 'tech-stack-icons'



const skillsData = [
  {
    cardTitle: "Frontend",
    skills: [
      { name: "React", iconName: 'react' },
      { name: "HTML", iconName: 'html5' },
      { name: "CSS", iconName: 'css3' },
      { name: "JavaScript", iconName: 'js' },
      { name: "TypeScript", iconName: 'typescript' },
      { name: "Tailwind CSS", iconName: 'tailwindcss' },
    ],
  },
  {
    cardTitle: "Backend",
    skills: [
      { name: "Node.js", iconName: 'nodejs' },
      { name: "Express", iconName: 'expressjs' },
      { name: "MongoDB", iconName: 'mongodb' },
      { name: "JavaScript", iconName: 'js' },
    ],
  },
  {
    cardTitle: "Tools & Architecture",
    skills: [
      { name: "GitHub", iconName: 'github' },
      { name: 'Vs Code', iconName: 'vscode'},
      { name: "Vercel", iconName: 'vercel' },
      { name: 'Netlify', iconName: 'netlify2'},
      
    ],
  },
];


function Skills() {
  return (
    <section id="skills">
      <div className="flex flex-col dark:text-white p-5 my-5">
      <h1 data-aos="fade-up" className="mb-5 font-bold text-4xl uppercase border-b-2 border-emerald-500 pb-2 self-start inline-block">
        Technical Skills
      </h1>

      <div className="w-full flex flex-col dark:text-white">
        {skillsData.map((category, index) => (
          <div key={index} data-aos="fade-left" data-aos-delay={ index * 100}>
            <SkillCard
            key={category.cardTitle}
            cardTitle={category.cardTitle}
          >
            {category.skills.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                iconName={skill.iconName}
              />
            ))}
          </SkillCard>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Skills;

type SkillCardProps = {
  cardTitle: string;
  children: React.ReactNode;
};

export const SkillCard = ({
  cardTitle,
  children,
}: SkillCardProps) => {
  return (
    <div className="flex flex-col my-5">
      <h1 className="my-2 text-xl dark:text-white/70 font-bold">
        {cardTitle}
      </h1>

      <div className="flex flex-wrap gap-3">
        {children}
      </div>
    </div>
  );
};

type SkillItemProps = {
  name: string;
  iconName: string
};

export const SkillItem = ({ name, iconName  }: SkillItemProps) => {
  return (
    <div className="rounded-lg bg-purple-500/20 border border-purple-500/30 px-4 py-2">
      <div className="flex items-center gap-2 text-purple-300">
        <StackIcon name={iconName} className="w-6 h-6 text-black" />
        <span className="font-medium dark:text-white text-black/70">{name}</span>
      </div>
    </div>
  );
};