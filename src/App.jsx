// Modificación en el componente App para el SkillsAccordion

import React from "react";
import Header from "./components/demo/Header";
import SkillsCards from "./components/demo/SkillsCards";
import { ExpAndProjects } from "./components/demo/ExpAndProjects";
import { ThemeProvider } from "./components/ThemeProvider";
import { Card } from "./components/ui/card";
import { SkillsAccordion } from "./components/demo/SkillsAccordion";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center space-y-4 w-full h-auto overflow-auto mx-auto sm:hidden">
        <Header />
        <ExpAndProjects />
        <SkillsCards />
      </div>

      <div className="hidden md:grid md:grid-cols-5 md:grid-rows-6 md:gap-4 md:h-screen p-4">
        <Card className="md:col-span-3 md:row-span-4 flex justify-center items-center">
          <Header />
        </Card>
        <Card className="md:col-span-2 md:row-span-3 md:col-start-4 flex justify-center items-center">
          <ExpAndProjects />
        </Card>
        {/* Ajustes en el Card que contiene SkillsAccordion */}
        <Card className="md:col-span-2 md:row-span-3 md:col-start-4 md:row-start-4 flex overflow-auto w-full h-full p-4 overflow-y-scroll scrollbar-hide">
          <SkillsAccordion />
        </Card>
        <Card className="md:col-span-3 md:row-span-2 md:row-start-5"></Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
