// Modificación en el componente App para el SkillsAccordion

import React from "react";
import Header from "./components/demo/Header";
import { ExpAndProjects } from "./components/demo/ExpAndProjects";
import { ThemeProvider } from "./components/ThemeProvider";
import { Card } from "./components/ui/card";
import { SkillsAccordion } from "./components/demo/SkillsAccordion";
import { PiGearFineBold } from "react-icons/pi";
import Formacion from "./components/demo/Formacion";
import ContactForm from "./components/demo/ContactForm";

function App() {
  return (
    <ThemeProvider>
       <div className="lg:grid grid-cols-6 grid-rows-7 gap-4 p-4 h-[100vh] w-full hidden">
        <Card className="col-span-2 row-span-3 flex justify-start overflow-auto border border-white glass">
          <Header />
        </Card>
        <Card className="col-span-2 row-span-4 col-start-1 row-start-4 container flex justify-center items-center border border-white glass">
          <ExpAndProjects />
        </Card>
        <Card className="relative col-span-2 row-span-5 col-start-3 row-start-1 flex w-full h-full p-4 scrollbar-hide border border-white overflow-hidden glass">
          <SkillsAccordion />
          <PiGearFineBold className="text-[8rem] text-white absolute -bottom-10 -right-1 animate-spin-slow z-10" />
          <PiGearFineBold className="text-[7rem] text-white absolute bottom-10 -right-16 animate-spin-reverse z-10" />
        </Card>
        <Card className="col-span-2 glass row-span-2 col-start-3 row-start-6 border border-white flex justify-center items-center">
          Algo funcional o interesante
        </Card>
        <Card className="col-span-2 row-span-4 col-start-5 row-start-1 border border-white overflow-y-scroll rounded-r-md glass">
          <Formacion />
        </Card>
        <Card className="relative col-span-2 row-span-3 col-start-5 row-start-5 border border-white overflow-y-scroll rounded-r-md z-50 glass">
          <ContactForm />
          <PiGearFineBold className="text-[7rem] text-white absolute -top-16 -left-16 animate-spin-reverse z-10" />
        </Card>
      </div>


      <div className="flex flex-col w-full h-auto space-y-10 lg:hidden">
        <Card className="flex">
          <Header />
        </Card>
        <Card className="flex justify-center items-center">
          <ExpAndProjects />
        </Card>
        <Card className="relative col-span-2 row-span-5 col-start-3 row-start-1 flex w-full h-full p-4 scrollbar-hide overflow-hidden">
          <SkillsAccordion />
          <PiGearFineBold className="text-[8rem] text-white absolute -bottom-10 -right-1 animate-spin-slow z-10" />
          <PiGearFineBold className="text-[7rem] text-white absolute bottom-10 -right-16 animate-spin-reverse z-10" />
        </Card>
        <Card className="flex justify-center items-center">
          Algo funcional o interesante
        </Card>
        <Card className="overflow-y-scroll rounded-r-md ">
          <Formacion />
        </Card>
        <Card className="flex overflow-y-scroll rounded-r-md z-50">
          <ContactForm />
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
