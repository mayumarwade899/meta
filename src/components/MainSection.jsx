import demopng from "../assets/demo.png";

function MainSection() {
  return (
    <section className="main-section text-center flex flex-col mt-32">
      <h1 className="text-3xl font-extrabold text-black sm:text-[50px] leading-[1.1]">
        Unlock the Growth with
        <br />
        <span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
          Our SaaS Platform
        </span>
      </h1>
      <h2 className="mt-3 text-gray-600 sm:text-xl">
        Meta is an open-source tool for developers who want to launch their idea
        faster.
      </h2>
      <div className="flex mx-auto mt-5 max-w-fit space-x-4">
        <a
          href="#get-started"
          className="mx-auto max-w-fit rounded-full px-4 py-2 text-sm font-medium bg-black text-white shadow-sm hover:ring-gray-400 hover:ring-2 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"
        >
          Get Started
        </a>
        <a
          href="#get-started"
          className="mx-auto max-w-fit rounded-full px-4 py-2 text-sm border border-gray-200 font-medium bg-white text-black shadow-sm hover:ring-gray-300 hover:ring-2 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"
        >
          Learn more
        </a>
      </div>
      <div className="mt-5 items-center justify-center">
        <img
          src={demopng}
          alt="demo"
          className="mx-auto max-h-[300px] sm:max-h-[500px]  transition duration-300 hover:scale-105 cursor-pointer"
        />
      </div>
    </section>
  );
}

export default MainSection;
