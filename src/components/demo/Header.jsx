import React from "react";
import { Button } from "../ui/button";
import Profile from "/profile.jpg";

function Header() {
  return (
    <div className="text-white">
      <div className="flex flex-col items-center justify-center p-4">
        <img
          src={Profile} // Reemplaza con la ruta de tu imagen
          alt="Tomás Langer"
          className="rounded-xl w-32 h-32 mb-4"
        />
        <h1 className="text-2xl font-semibold">Hola, soy Tomás Langer</h1>
        <p className="text-md mb-4">Desarrollador web de Valparaíso, Chile</p>
        <p className="text-md text-slate-400 text-pretty px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magnam,
          repellendus dolorum amet deleniti accusantium repudiandae iure quos
          totam repellat omnis odio ad corrupti illo assumenda quod obcaecati
          doloremque accusamus.
        </p>
        <div className="flex space-x-4 mt-4">
          <Button>
            <a href="mailto:tomas.ild.93@gmail.com">Contáctame</a>
          </Button>
          <Button>Abrir CV</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
