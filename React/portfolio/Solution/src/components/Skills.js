import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import { SiRedux, SiFirebase, SiGit, SiSass } from "react-icons/si";

function Skills() {
  const skillsData = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
    },
    {
      name: "Git",
      icon: <SiGit />,
    },
    {
      name: "Sass",
      icon: <SiSass />,
    },
    {
      name: "Database",
      icon: <FaDatabase />,
    },
    {
      name: "Coding",
      icon: <FaCode />,
    },
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
