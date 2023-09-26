import Contact from "./components/Contact";
import Hero from "./components/Hero";
import LanguageItems from "./components/LanguageItems";
import Nav from "./components/Nav";
import ProjectItems from "./components/ProjectItems";

function App() {
  return (
    // <div className="bg-backGround sm:mx-0 px-1 sm:px-28 lg:px-44">
    <div className="min-h-screen pt-5 font-body bg-backGround">
      <div className="background">
        <Nav />
      </div>
      <div className="background">
        <Hero />
      </div>
      <div className="background relative">
        <LanguageItems />
      </div>
      <div className="background">
        <ProjectItems />
      </div>
      <div className="background bg-[#242424] relative">
        <Contact />
      </div>
      <div className="background bg-[#242424]">
        <div className="pt-4 pb-10">
          <div className="w-full h-[1px] bg-[#D9D9D9] mb-10"></div>
          <Nav />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
