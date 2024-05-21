import "../../src/index.css";
import htmlLogo from "../assets/html.png";
import jsLogo from "../assets/javascript.png";
import tailwindLogo from "../assets/tailwind.png";
import reactLogo from "../assets/react.png";
import cssLogo from "../assets/css.png";
import pythonLogo from "../assets/python.png";
import cppLogo from "../assets/cpp.png";
import vbnetLogo from "../assets/vb.png";
import gitLogo from "../assets/git.png";
import xmlLogo from "../assets/xml.png";
import javaLogo from "../assets/java.png";
import mysqlLogo from "../assets/mysql.png";

const Skills = () => {
  const skills = [
    { name: "Python", logo: pythonLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "Java", logo: javaLogo },
    { name: "C++", logo: cppLogo },
    { name: "React", logo: reactLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "VB.NET", logo: vbnetLogo },
    { name: "XML", logo: xmlLogo },
    { name: "Git", logo: gitLogo },
  ];

  return (
    <div
      className="skills-container py-10 text-white h-auto"
      id="skills"
    >
      <div className="text-gray-300 my-3">
        <h3 className="text-4xl font-semibold mb-5">
          My <span>Skills</span>
        </h3>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
