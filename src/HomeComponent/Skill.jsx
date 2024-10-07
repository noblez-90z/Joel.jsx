import javascript from "../assets/javascript-sSEEm26o.png";
import react from "../assets/react-RyjyEBAs.png";
import redux from "../assets/redux.png";
import bootStrap from "../assets/botstrap.png";
import tailwind from "../assets/tailwind-XqZbAOCf.png";
import css from "../assets/css-lRK8hhwk.png";
import html from "../assets/html-_DheghBX.png";
import git from "../assets/github-5E6907pT.png";
import communication from "../assets/communication-skills.png";
import creativity from "../assets/creativity.png";
import team from "../assets/united.png";
import solving from "../assets/problem-solving.png";

const Skill = () => {
  const skills = [
    { skill: "javascript", icon: javascript },
    { skill: "react", icon: react },
    { skill: "redux", icon: redux },
    { skill: "css", icon: css },
    { skill: "tailwind", icon: tailwind },
    { skill: "bootStrap", icon: bootStrap },
    { skill: "gitHub", icon: git },
    { skill: "html", icon: html },
  ];

  const upSkills = [
    { skill: "creativity", icon: creativity },
    { skill: "communication", icon: communication },
    { skill: "problem solving", icon: solving },
    { skill: "team work", icon: team },
  ];
  return (
    <div id="Skill" className="mt-20 ">
      <div className="flex justify-center items-center gap-4 my-4 px-3">
        <span className="h-1 w-full bg-[#dbdbdb]"></span>
        <h1 className="py-3 text-center font-bold text-5xl">Skills</h1>
        <span className="h-1 w-full bg-[#dbdbdb]"></span>
      </div>
      <div className="py-3 px-10 grid md:grid-cols-4 grid-cols-2 gap-5 capitalize mt-14 animate-fadeInOut">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="  py-3 px-4 rounded-xl bg-[#dbeafe] transition-transform tranisition-opacity scale-100  duration-1000 ease-in "
          >
            <img src={skill.icon} alt="" className="w-full" />
            <p className="py-3 font-semibold uppercase text-[#374151]">
              {skill.skill}{" "}
            </p>
          </div>
        ))}
      </div>
      <div className="py-3 px-10 ">
        <h2 className="py-3 my-4 font-semibold text-xl">Basic skills</h2>

        <div className=" grid md:grid-cols-3 grid-cols-2 gap-3  ">
          {upSkills.map((skill, index) => (
            <div
              key={index}
              className="border py-3 px-2 md:px-4 rounded-xl text-center bg-[#bfdbfe] "
            >
              <img src={skill.icon} alt="" className="w-20" />
              <p className="font-semibold md:font-bold md:text-xl capitalize py-2  text-[#374151]">
                {skill.skill}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
