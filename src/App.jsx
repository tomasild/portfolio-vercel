import React from 'react';
import Header from "./components/demo/Header";
import SkillsCards from "./components/demo/SkillsCards";
import { ExpAndProjects } from "./components/demo/ExpAndProjects";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      {/* Sección para xs y sm: se muestra solo en pantallas pequeñas */}
      <div className="flex flex-col items-center justify-center space-y-4 w-full h-auto overflow-auto mx-auto sm:hidden">
        <Header />
        <ExpAndProjects />
        <SkillsCards />
      </div>

      {/* Sección para md, lg y xl: se muestra en pantallas más grandes */}
      <div className="hidden md:grid md:grid-cols-5 md:grid-rows-6 md:gap-4 md:h-screen">
        <div className="md:col-span-3 md:row-span-4"><Header /></div>
        <div className="md:col-span-2 md:row-span-3 md:col-start-4"><ExpAndProjects /></div>
        <div className="md:col-span-2 md:row-span-3 md:col-start-4 md:row-start-4"></div>
        <div className="md:col-span-3 md:row-span-2 md:row-start-5"><SkillsCards /></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
