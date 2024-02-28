import { CarouselOrientation } from "./components/demo/CarouselOrientation";
import  Header  from "./components/demo/Header";
import Projects from "./components/demo/Projects";
import SkillsCards from "./components/demo/SkillsCards";

import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <section className="flex flex-col items-center justify-center space-y-4 w-full md:w-[70%] lg:w-[50%] h-full mx-auto bg-slate-900 bg-opacity-50 ">
        <Header />
        <Projects />
        <SkillsCards />
      </section>
    </ThemeProvider>
  );
}

export default App;
