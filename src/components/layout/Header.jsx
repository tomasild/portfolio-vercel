import React from "react";

function Header() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex w-full py-2 justify-between items-center h-14">
        <li className="flex-1">
          <a
            href="#sobre-mi"
            className="block text-center px-2 sm:px-4 hover:text-primary focus:text-primary font-semibold"
          >
            Sobre mí
          </a>
        </li>
        <li className="flex-1">
          <a
            href="#experiencia"
            className="block text-center px-2 sm:px-4 hover:text-primary focus:text-primary font-semibold"
          >
            Experiencia
          </a>
        </li>
        <li className="flex-1">
          <a
            href="#skills"
            className="block text-center px-2 sm:px-4 hover:text-primary focus:text-primary font-semibold"
          >
            Skills
          </a>
        </li>
        <li className="flex-1">
          <a
            href="#educacion"
            className="block text-center px-2 sm:px-4 hover:text-primary focus:text-primary font-semibold"
          >
            Formación
          </a>
        </li>
        <li className="flex-1">
          <a
            href="#contacto"
            className="block text-center px-2 sm:px-4 hover:text-primary focus:text-primary font-semibold"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
