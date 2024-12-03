import { faWebflow } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      name: "UI developement",
      icon: <FontAwesomeIcon icon={faCode} />,
      text: "i specialize in building user-entric web designs that enhance website and applications. my service include responsive web design, interactive elements, and performance optimization. with expertise in mordern frameworks and a focus on user experience, i'm dedicated to creating engagin and seamless digital interfaces.",
      btn: "hire me",
    },
    {
      name: "frontend developement",
      icon: <FontAwesomeIcon icon={faCode} />,
      text: "i'm a skilled frontend developer with passion to building user  friendly websites.my services encompass frontend development and  efficent code implementation. i am dedicated to creating  impactfull digital experience",
      btn: "hire me ",
    },
    {
      name: " backend integration services",
      icon: <FontAwesomeIcon icon={faCode} />,
      text: "i specialize in collaborating with backend developers  to integrate APIs and databases, allowing for dynamic content updates and user interactions.",
      btn: "hire me ",
    },
  ];
  return (
    <div id="Service" className="px-6 py-4 mt-10 capitalize mb-4">
      <h1 className="py-5 my-6 text-center font-extrabold text-3xl">
        services
      </h1>
      <div className="block md:flex justify-around gap-10 mt-14">
        {services.map((service, index) => (
          <div
            key={index}
            className=" w-full mt-5 md:mt-0  px-5 rounded-lg bg-[#999999]"
          >
            <div className="text-5xl py-5 text-[#dbeafe]">{service.icon}</div>
            <p className="uppercase py-2 font-bold text-xl">{service.name} </p>
            <span className="w-10 h-1 block  bg-[#ffbd39] my-3 animate-bounce"></span>
            <p className="py-3 text-[16px] font-medium">{service.text}</p>
            <button className="py-2 px-4 text-[#374151] capitalize font-semibold my-3 bg-[#dbeafe] rounded-lg">
              <Link to="#Contact">{service.btn} </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
