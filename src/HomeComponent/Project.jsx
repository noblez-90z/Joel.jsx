import ottoman from "../assets/ottomannew.png";
import datahub from "../assets/datahub.png";
import callapp from "../assets/callapp.png";
import token from "../assets/token.png";
import trcc from "../assets/trcc new.png";
import trustflick from "../assets/trustflick.png";
import Apex from "../assets/Apex cover (2).png";
import Dudesk from "../assets/dudesks cover.png";
import { Link } from "react-router-dom";

const Project = () => {
  const projects = [
    {
      name: "Apex",
      about:
        "apex logitics landing page dedicated to rendering logistics solution with efficency, realiablity, from real time tracking of flexing delivery and a good support commited to ensuring each delivery reaches it destination",
      pics: Apex,
      stacks: "javascript, react, tailwind shadcn",
      path: "https://apex-psi-murex.vercel.com",
      git: "https://noblez-90z/Apex",
    },
    {
      name: "Dudesk",
      about:
        "a school landing page  that  provides a comprehensive platform for management of school fees payment, administrative and communication functions for eductional institutions",
      pics: Dudesk,
      stacks: "javascript, react, tailwind shadcn",
      path: "https://du-desks.vercel.app",
      git: "https://noblez-90z/DuDesks",
    },
    {
      name: "Ottomans-Beds",
      about:
        "an e-commerce platform specializing in bed and bed frames, featuring a streamlined product catalog and state management using redux for a smooth and consistent user experience",
      pics: ottoman,
      stacks: "javascript,  react,  redux,  tailwind",
      path: "https://Ottoman-beds.vercel.app",
      git: "https://noblez-90z/OttomanBeds",
    },
    {
      name: "NobleDataHub",
      about:
        "an online service where users can conveniently purchase mobile data bundle, buy recharge cards and pay other utilities, offering instant transaction, multiple payment options, and easy browsing of data plans.",
      pics: datahub,
      stacks: "javascript,  react,  tailwind",
      path: "https://Noble-data-hub.vercel.app",
      git: "https://noblez-90z/NobleDataHub",
    },
    {
      name: "Mini call app",
      about:
        "a lightweight, user-friendly app that enable quick vioce and video calls with minimal setup, offering seamless connectivity for personal and professional communication",
      pics: callapp,
      stacks: "javascript,  react,  redux,  tailwind",
      path: "https://mini-call-app.vercel.app",
      git: "https://noblez-90z/MiniCallApp",
    },
    {
      name: "Token generator app",
      about:
        "a secure app that generate unique tokens for authentication, API access, or secure transactions, ensuring encrypted and reliable token-based workflows for developers or businesses.",
      pics: token,
      stacks: "javascript,  react,  redux,  tailwind",
      path: "https://token-ten-sand.vercel.app",
      git: "https://noblez-90z/Token",
    },
    {
      name: "TRCC",
      about:
        "an agricultural website, where users can get information on agricultural processes and practices, and manage pest on the farms, with wide range of farm products",
      pics: trcc,
      stacks: "javascript, react, tailwind",
      path: "https://trcc-chi.vercel.app",
      git: "https://noblez-90z/TRCC",
    },
    {
      name: "trustflick",
      about:
        "a financial application designed for users to apply for loans, manage repayment schedules, and track loan status, featuring fast approval processes and flexible loan terms",
      pics: trustflick,
      stacks: "javascript,  react,  mui",
      path: "https://trust-flick.vercel.app",
      git: "https://noblez-90z/TrustFlick",
    },
  ];
  return (
    <div className="px-10 mt-10">
      <h1 className="py-3 text-center font-extrabold text-3xl capitalize">
        our Projects
      </h1>
      <div id="Project" className="block md:grid grid-cols-3 gap-4 my-6 py-6 ">
        {projects.map((project, index) => (
          <div key={index} className=" rounded-b-lg mt-5 md:mt-0">
            <img src={project.pics} alt="" className="h-[200px] w-full" />
            <div className="py-4 px-3 capitalize bg-[#bfdbfe] text-[#374151] rounded-b-lg">
              <h2 className="font-bold text-xl py-2">{project.name} </h2>
              <p className="py-5 text-[16px] font-medium">{project.about} </p>
              <p className="py-1 px-3 my-3 bg-[#89bbf7] w-fit rounded-lg text-xl font-semibold">
                {project.stacks}{" "}
              </p>
              <div className="flex justify-between border-t py-3">
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    className="text-lg cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                </a>
                <a
                  href={project.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 640 512"
                    className="text-lg cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
