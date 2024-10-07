import { useEffect, useState } from "react";
// import Joel from "../assets/joel noblez.jpg";
// import me from "../assets/2347058567452_status_d024e3d28e484b4691b38734e3dac6fc.jpg";
import cover from "../assets/1674617947228.gif";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";

const Hero = () => {
  const infos = [
    {
      start: "i'm",
      name: "Joel asuquo",
      occupation: "a freelance frontend web developer",

      quote: "building user friendly webflow",
    },
    {
      start: "i'm a",
      occupation1: "a frontend web developer",
      quote: "making good and quality webpage",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === infos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change item set every 3 seconds

    return () => clearInterval(interval);
  }, [infos.length]);
  return (
    <div className="block mx-auto  w-full  md:h-[500px] md:flex justify-around items-center py-10 px-4 ">
      <div className="flex-1  ">
        {infos.map((info, index) => (
          <div key={index} className="  ">
            <div
              key={index}
              className={`text-center  capitalize w-full   ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <div className="   flex justify-center items-center h-[400px] w-full   animate-pulse">
                <div className="">
                  <p className="font-meduim text-2xl py-2 text-[#bfdbfe]">
                    hello !{" "}
                  </p>
                  <h1 className="font-extrabold text-2xl text-[#bfdbfe] ">
                    <span className="mr-2 md:text[#bfdbfe] text-white">
                      {info.start}
                    </span>
                    {info.name}
                  </h1>
                  <p className="font-extrabold text-2xl  py-2 text-[#bfdbfe]">
                    {info.occupation}{" "}
                  </p>
                  <p className="font-extrabold text-2xl py-1 text-[#bfdbfe]">
                    {info.occupation1}{" "}
                  </p>
                  <span className="py-2 font-semibold text-[#0891b2]">
                    {info.quote}{" "}
                  </span>
                  <div className="py-4 flex gap-3 justify-center">
                    <button className="py-2 px-4 rounded-full  capitalize bg-[#ffbd39]">
                      <HashLink smooth to="#Contact">
                        hire me{" "}
                      </HashLink>
                    </button>
                    <button className="py-2 px-4 rounded-full border capitalize   ">
                      <HashLink smooth to="#Project">
                        my works
                      </HashLink>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex-1 w-full rounded-lg flex justify-center items-center mt-4 md:mt-0 ">
        <div className="">
          <img
            src={cover}
            alt="Joel"
            className="md:h-[400px] md:w-[400px] rounded-full w-full object-fit object-cover bg-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
