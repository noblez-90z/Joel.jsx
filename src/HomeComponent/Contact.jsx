import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Joel from "../assets/joel noblez.jpg";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  const socials = [
    {
      brand: "twitter",
      icon: <FontAwesomeIcon icon={faXTwitter} />,
      link: "https://x.com/Joel_Noblez",
    },
    {
      brand: "gitHub",
      icon: <FontAwesomeIcon icon={faGithub} />,
      link: "https://github.com/noblez-90z",
    },
    {
      brand: "linkedIn",
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      link: "https://linkedin.com/in/joel-kufre-1b45b1283",
    },
  ];
  return (
    <div id="Contact" className="px-10 capitalize mt-10">
      <h1 className="py-3 text-center font-extrabold text-3xl">Contact me</h1>
      <p className="py-3 font-bold">let's work together</p>
      <p className="py-4">
        feel free to get in touch with me for any inquires, collaboration,
        volunteer and project discussions. looking foward to working with you
      </p>
      <div className="my-3 py-3">
        <div className="flex justify-center gap-6">
          {socials.map((social, index) => (
            <div key={index} className=" py-3 px-4 text-center rounded-lg">
              <Link to={social.link}>
                {social.icon}
                <p>{social.brand} </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 py-2 my-3">
          <FontAwesomeIcon icon={faPhone} />

          <p>+234 9022108521, 07058567452</p>
        </div>
        <div className="flex items-center gap-3 lowercase">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:donnellnoblez@gmail.com">donnellnoblez@gmail.com</a>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div className="flex-1  h-[400px] w-full md:w-[400px] hidden md:block ">
          <img
            src={Joel}
            alt="Joel"
            className="h-[400px] rounded-xl w-full object-fit object-cover bg-black"
          />
        </div>
        <div className="py-4 flex-1 w-full">
          <h2>send me a message </h2>
          <input
            type="text"
            placeholder="your name"
            className="py-2 px-2 border rounded-md my-2 w-full"
          />
          <input
            type="text"
            placeholder="your email"
            className="py-2 px-2 border rounded-md my-2 w-full"
          />
          <input
            type="text"
            placeholder="subject"
            className="py-2 px-2 border rounded-md my-2 w-full"
          />
          <textarea
            placeholder="message"
            className="py-2 px-2 border rounded-md my-2 w-full"
            cols="20"
            rows="10"
          ></textarea>
          <button className="py-2 px-5 capitalize font-semibold bg-[#ffbd39] my-3 rounded-full">
            <a href="mailto:donnellnoblez@gmail.com">send message</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
