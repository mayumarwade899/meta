/* eslint-disable react/prop-types */
function RoadmapSection({ items }) {
  return (
    <section className="max-w-80 mx-auto">
      <h1 className="font-semibold text-3xl text-center mb-16">Roadmap</h1>
      {items.map((item, index) => (
        <div key={index} className="flex w-full">
          <div className="relative flex flex-col items-center h-32 mt-2">
            <div className="relative z-20 bg-gradient-to-b from-pink-500 to-indigo-500 h-4 w-4 rounded-full flex-shrink-0 transition duration-300 hover:scale-125 cursor-pointer">
              <div className="absolute z-10 bg-gradient-to-b from-pink-500 to-indigo-500 h-5 w-5 rounded-full flex-shrink-0 blur-md"></div>
            </div>
            {index !== items.length - 1 && (
              <div className="absolute z-0 top-2 w-1 bg-gray-400 flex-grow h-full"></div>
            )}
          </div>
          <div className="ml-10">
            <h3 className="text-xl font-bold transition duration-300 hover:scale-105 cursor-pointer">{item.name}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default RoadmapSection;
