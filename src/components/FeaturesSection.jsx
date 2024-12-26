import { features } from "../Data/Features";

function FeaturesSection() {
  return (
    <section id="features" className="flex flex-col items-center justify-center p-10">
      <h1 className="capitalize text-indigo-600 text-3xl font-semibold">Features</h1>  
      <h2 className="font-extrabold text-3xl text-center mb-4 md:mb-8 pt-3">Intelligent Form Building</h2>
      <div className="mt-10 items-center grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-xl">
        {features.map((feature, index) => (
          <div key={index} className="flex bg-white border border-indigo-400/30 rounded-lg shadow-lg p-6 md:h-full space-x-4 transition duration-300 hover:scale-105 cursor-pointer">
            <div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
