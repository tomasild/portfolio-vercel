// Modificación en el componente App para el SkillsAccordion

import React from "react";
import Header from "./components/demo/Header";
import SkillsCards from "./components/demo/SkillsCards";
import { ExpAndProjects } from "./components/demo/ExpAndProjects";
import { ThemeProvider } from "./components/ThemeProvider";
import { Card } from "./components/ui/card";
import { SkillsAccordion } from "./components/demo/SkillsAccordion";
import { PiGearFineBold } from "react-icons/pi";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center space-y-4 w-full h-auto overflow-auto mx-auto sm:hidden">
        <Header />
        <ExpAndProjects />
        <SkillsCards />
      </div>

      <div className="grid grid-cols-6 grid-rows-7 gap-4 p-4 h-[100vh] w-full">
        <Card className="col-span-2 row-span-3 flex justify-start overflow-auto border border-white">
          <Header />
        </Card>
        <Card className="col-span-2 row-span-4 col-start-1 row-start-4 container flex justify-center items-center border border-white">
          <ExpAndProjects />
        </Card>
        <Card className="relative col-span-2 row-span-5 col-start-3 row-start-1 flex overflow-auto w-full h-full p-4 overflow-y-scroll scrollbar-hide border border-white">
          <SkillsAccordion/>
          {/* Añade `style` para rotar el ícono */}
          <PiGearFineBold
            className="text-[8rem] text-white absolute -bottom-10 -right-10 animate-spin-slow z-10"
          />
          <PiGearFineBold
            className="text-[7rem] text-white absolute bottom-16 -right-14 animate-spin-reverse z-10"
          />
        </Card>
        <Card className="col-span-2 row-span-2 col-start-3 row-start-6 border border-white">
          Otros
        </Card>
        <Card className="col-span-2 row-span-4 col-start-5 row-start-1 border border-white">
          Educacion
        </Card>
        <div className="col-span-2 row-span-3 col-start-5 row-start-5 border border-white">
          Contacto
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
