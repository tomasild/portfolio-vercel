import React from "react";
import { Button } from "../ui/button";
import Profile from "/profile.jpg";
import { Card } from "../ui/card";

function Header() {
  return (
    <div className="text-white w-full">
      <div className="flex flex-col items-center justify-center p-4 pb-0">
        <img
          src={Profile} // Reemplaza con la ruta de tu imagen
          alt="Tomás Langer"
          className="rounded-xl w-16 h-16 mb-4"
        />
        <h1 className="text-2xl font-semibold">Hola, soy Tomás Langer</h1>
        <p className="text-md text-gray-300">Desarrollador web de Valparaíso, Chile. Poseo 6 meses de experiencia como Frontend Developer,actualmente esepcializandome en accesibilidad e interesado en el desarrollo mobile.
        <a className="cursor-pointer hover:underline font-bold ml-2 text-primary">Saber más</a> </p>
      </div>
        <div className="flex px-4 justify-between space-x-4 py-2">
          <Button className="flex w-full"> 
            <a href="mailto:tomas.ild.93@gmail.com">Contáctame</a>
          </Button>
          <Button  className="flex w-full">Abrir CV</Button>
        </div>
    </div>
  );
}

export default Header;
