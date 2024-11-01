import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../demo/About";
import AboutOpen from "@/components/pages/AboutOpen";
import ProjectOpen from "@/components/pages/ProjectOpen";
import { ExpAndProjects } from "@/components/demo/ExpAndProjects";
import { useTheme } from "@/components/ThemeProvider";
import { Card } from "@/components/ui/card";
import { SkillsAccordion } from "@/components/demo/SkillsAccordion";
import Formacion from "@/components/demo/Formacion";
import ContactForm from "@/components/demo/ContactForm";
import Layout from "@/components/layout/Layout";
import { Novatrix, Velustro, Tranquiluxe } from "uvcanvas";
import Stars from "@/components/demo/Stars";
import { HashLink as Link } from "react-router-hash-link";

function AppContent() {
  const { theme } = useTheme() || {};

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="lg:grid grid-cols-6 grid-rows-7 gap-4 p-4 h-[100vh] w-full hidden bg-transparent ">
                <Card className="col-span-2 row-span-3 flex justify-start overflow-auto border border-accent dark:border-white neon dark:bg-custom_bg1 dark:hover:bg-custom_bg2 dark:backdrop-blur-sm">
                  <About />
                </Card>
                <Card className="col-span-2 overflow-auto row-span-4 col-start-1 row-start-4 p-4 flex justify-start items-start border border-accent dark:border-white neon dark:bg-custom_bg1 dark:hover:bg-custom_bg2 dark:backdrop-blur-sm">
                  <SkillsAccordion />
                </Card>
                <Card className="relative col-span-2 row-span-7 col-start-3 row-start-1 flex w-full h-full p-4 border border-accent dark:border-white overflow-y-auto overflow-x-hidden neon dark:bg-custom_bg1 dark:hover:bg-custom_bg2 dark:backdrop-blur-sm">
                  <Formacion />
                </Card>
                <Card className="col-span-2 p-4 row-span-4 col-start-5 row-start-1 border border-accent justify-start items-start dark:border-white overflow-y-auto rounded-r-md neon dark:bg-custom_bg1 dark:hover:bg-custom_bg2 dark:backdrop-blur-sm">
                  <ExpAndProjects />
                </Card>
                <Card className="relative col-span-2 row-span-3 col-start-5 row-start-5 border border-accent dark:border-white overflow-y-scroll rounded-r-md z-50 neon dark:bg-custom_bg1 dark:hover:bg-custom_bg2 dark:backdrop-blur-sm">
                  <ContactForm />
                </Card>
              </main>

              {/* MOBILE */}
              <Layout>
                <div className="block w-full h-full space-y-16 lg:hidden bg-white bg-opacity-50 dark:bg-custom_bg1 dark:text-white">
                  <div className="flex mt-10" id="sobre-mi">
                    <About />
                  </div>
                  <div
                    className=" flex justify-center items-center scroll-reveal "
                    id="experiencia"
                  >
                    <ExpAndProjects />
                  </div>
                  <div
                    className=" relative flex w-full h-full p-4 scrollbar-hide overflow-hidden scroll-reveal"
                    id="skills"
                  >
                    <SkillsAccordion />
                  </div>
                  <div
                    className=" overflow-y-scroll rounded-r-md scroll-reveal"
                    id="educacion"
                  >
                    <Formacion />
                  </div>
                  <div className="flex scroll-reveal" id="contacto">
                    <ContactForm />
                  </div>
                </div>
              </Layout>
            </>
          }
        />
        <Route path="/aboutOpen" element={<AboutOpen />} />
        <Route path="/projectOpen/:projectTitle" element={<ProjectOpen />} />
      </Routes>
      <div>
        {theme === "dark" ? (
          <Stars />
        ) : (
          <Novatrix className="fixed top-0 left-0 w-full h-full -z-10" />
        )}
      </div>
    </div>
  );
}

export default AppContent;
