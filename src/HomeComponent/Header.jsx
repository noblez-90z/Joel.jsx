import { useState } from "react";

import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex justify-between items-center px-6 py-4 h-[70px]">
      <div className="">
        <h2 className="font-extrabold text-3xl capitalize py-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          joel.{" "}
          <span className="italic font-light text-[24px] lowercase">jsx</span>
        </h2>
      </div>
      <div className="block md:hidden  absolute right-5 top-4 cursor-pointer">
        {/* <FontAwesomeIcon icon={faBars} /> */}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="text-[22px]"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleMenuOpen}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
        </svg>
      </div>

      <div
        className={`absolute top-[68px] right-0 md:top-2 md:h-[50px] z-50 md:right-2  px-4 w-full md:w-fit block md:flex items-center bg-[#333] md:bg-black ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav>
          <div className="list-none px-4 mx-3 py-6 md:py-0  block md:flex gap-2 items-center capitalize z-50 ">
            <li className="block px-4 py-2 font-medium cursor-pionter text-xl  text-[#bfdbfe] hover:border-b-2 hover:border-gray-100">
              {/* <Link to="/">home</Link> */}
              <HashLink smooth to="#Hero">
                home
              </HashLink>
            </li>
            <li className="block px-4 py-2 font-medium cursor-pionter text-xl  text-[#bfdbfe] hover:border-b-2 hover:border-gray-100">
              {/* <Link>about</Link> */}
              <HashLink smooth to="#About">
                about
              </HashLink>
            </li>
            {/* <li className="block px-4 py-2 font-medium cursor-pionter text-xl  text-[#bfdbfe] hover:border-b-2 hover:border-gray-100">
              <Link>resume</Link>
              <HashLink smooth to="#Resume">
                resume
              </HashLink>
            </li> */}
            <li className="block px-4 py-2 font-medium cursor-pionter text-xl  text-[#bfdbfe] hover:border-b-2 hover:border-gray-100">
              {/* <Link>services</Link> */}
              <HashLink smooth to="#Service">
                Services
              </HashLink>
            </li>
            <li className="block px-4 py-2 font-medium text-xl  text-[#bfdbfe] hover:border-b-2 hover:border-gray-100">
              {/* <Link>skill</Link> */}
              <HashLink smooth to="#Skill">
                Skills
              </HashLink>
            </li>
            <li className="block px-4 py-2 font-medium text-xl  text-[#bfdbfe] hover:border-b-2 hover:border-gray-100">
              {/* <Link>project</Link> */}
              <HashLink smooth to="#Project">
                Projects
              </HashLink>
            </li>
            <li className="block px-4 py-2 font-medium cursor-pionter text-xl  text-[#bfdbfe] hover:border-b-2 hover:border-gray-100">
              {/* <Link>contact</Link> */}
              <HashLink smooth to="#Contact">
                Contact
              </HashLink>
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
