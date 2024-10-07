import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const Footer = () => {
  return (
    <div className="relative">
      <footer className="block md:flex justify-evenly py-4 px-4">
        <div className="">
          <h2 className="font-extrabold text-3xl capitalize py-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            joel.{" "}
            <span className="italic font-light text-[24px] lowercase">jsx</span>
          </h2>
          <p className="py-3 font-semibold">lets build together</p>
          <div className="py-4 flex gap-8">
            <a
              href="https://x.com/Joel_Noblez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://github.com/noblez-90z"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/joel-kufre-1b45b1283"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="font-semibold text-xl capitalize">links</h2>
          <nav>
            <div className="py-4 capitalize list-none">
              <li className="py-2">
                <Link>home</Link>
              </li>
              <li className="py-2">
                <HashLink smooth to="#About">
                  about
                </HashLink>
              </li>
              <li className="py-2">
                <HashLink smooth to="#Service">
                  Services
                </HashLink>
              </li>
              <li className="py-2">
                <HashLink smooth to="#Project">
                  Projects
                </HashLink>
              </li>
              <li className="py-2">
                <HashLink smooth to="#Contact">
                  Contact
                </HashLink>
              </li>
            </div>
          </nav>
        </div>

        <div className="mt-4 md:mt-0">
          <h2 className="font-semibold text-xl capitalize">have a question</h2>
          <div className="flex items-center gap-3 py-3">
            <FontAwesomeIcon icon={faLocation} />
            <address>1 unity close obawole, ikeja, lagos</address>
          </div>
          <div className="flex items-center gap-3 py-3">
            <FontAwesomeIcon icon={faPhone} />
            <p>+234 9022108521, 07058567452</p>
          </div>
          <div className="flex items-center gap-3 py-3">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>
              {" "}
              <a href="mailto:donnellnoblez@gmail.com">
                donnellnoblez@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
      <div className="text-center py-3">© joel.jsx 2024</div>
      <div className="absolute top-2 right-4 text-5xl animate-bounce">
        <HashLink smooth to="#top">
          <FontAwesomeIcon icon={faChevronCircleUp} />
        </HashLink>
      </div>
    </div>
  );
};

export default Footer;
