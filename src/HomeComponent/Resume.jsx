const Resume = () => {
  return (
    <div className="px-6 md:px-[24px] py-3 mt-8">
      <div className="flex justify-center items-center gap-4 ">
        <span className="h-1 w-full bg-[#dbdbdb]"></span>
        <h1 className="py-3 text-center font-extrabold text-3xl">Resume</h1>
        <span className="h-1 w-full bg-[#dbdbdb]"></span>
      </div>
      <div className="w-full  md:w-[60%] rounded-lg mt-14 mx-auto py-4 px-6 bg-[#ffffff1A]">
        <h3 className="py-2 font-bold text-2xl text-[#ffbd39]">2019-2024</h3>
        <h2 className="py-2 font-semibold text-3xl">
          master degree of Ecological science
        </h2>
        <p className="py-2 text-2xl ">university of uyo </p>
        <p className="py-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          itaque autem. Natus provident tempore quam modi, pariatur autem culpa
          hic mollitia, sapiente vel repellendus aliquam consectetur, magni
          voluptate ullam dolores?
        </p>
      </div>
      <button className="flex items-center gap-3 mx-auto py-2 px-5 capitalize font-semibold bg-[#ffbd39] mt-8 rounded-full">
        download cv
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
      </button>
    </div>
  );
};

export default Resume;
