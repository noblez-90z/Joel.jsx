import Joel from "../assets/joel noblez.jpg";

const About = () => {
  return (
    <div id="About" className="  flex justify-center gap-5 px-10 py-3 mt-20 ">
      <div className=" flex-1  h-[400px] w-full  hidden md:block ">
        <img
          src={Joel}
          alt="Joel"
          className="h-[400px] rounded-xl w-full object-fit object-cover bg-black"
        />
      </div>
      <div className="capitalize flex-1 px-4">
        <h2 className="font-extrabold text-4xl py-3">about me</h2>

        <p className="py-6">
          i'm Joel Asuquo, i'm a frontend developer with high performace web
          applications. i'm skilled at creating user friendly interfaces,
          improving user-side solutions. i pay close attention to detials and
          love finding innovative solution for each project, i'm open to
          connecting, working and collaborating on exciting projects with
          others.
        </p>

        <button className=" w-fit flex items-center gap-3 py-2 px-5 capitalize font-semibold bg-[#bfdbfe] my-3 rounded-full">
          <a
            href="/Joel.jsx.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit   flex items-center gap-2"
          >
            view resume
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 16 16"
              className="animate-bounce"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 8h-2.5l-3.5 3.5-3.5-3.5h-2.5l-2 4v1h16v-1l-2-4zM0 14h16v1h-16v-1zM9 5v-4h-2v4h-3.5l4.5 4.5 4.5-4.5h-3.5z"></path>
            </svg>
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
