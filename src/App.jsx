import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import { partnersLogo } from "./Data/PartnersLogo";
import Slider from "./components/Slider";
import RoadmapSection from "./components/RoadmapSection";
import {roadmap} from "./Data/RoadmapData"
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SubscriptionCard from "./components/SubscriptionCard";

function App() {
  return (
    <>
      <div className="flex justify-center w-screen min-h-screen fixed z-00 px-6 py-40 pointer-events-none">
        <img
          src="/mesh.svg"
          className="opacity-15 absolute bottom-1 h-[600px] z-10"
        />
        <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      </div>
      <div className="relative z-20">
        <Navbar />
        <div className="container mx-auto px-5">
          <MainSection />
          <Slider images={partnersLogo} />
          <RoadmapSection items={roadmap} />
          <FeaturesSection />
          <TestimonialsSection />
          <SubscriptionCard />
          <footer className="text-center p-8 text-gray-700 text-lg border-t bg-white/20 backdrop-blur-xl mt-10">
          <p>&copy; {new Date().getFullYear()} meta. All rights Reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
