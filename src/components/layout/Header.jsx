// En el componente Header.js
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest", // Esto ayuda a asegurar que la parte superior de la sección sea visible
      });
    }
  };

  return (
    <nav aria-label="Main navigation">
      <ul className="flex w-full py-2 justify-between items-center h-14">
        <li className="flex-1">
          <Link
            smooth
            to="/#sobre-mi"
            onClick={() => scrollToSection("sobre-mi")}
            className="block text-center px-2 sm:px-4 hover:text-primary focus:text-primary font-semibold"
          >
            Sobre mí
          </Link>
        </li>
        <li className="flex-1">
          <Link
            smooth
            to="/#experiencia"
            onClick={() => scrollToSection("experiencia")}
            className="block text-center px-2 sm:px-4 hover:text-primary focus:text-primary font-semibold"
          >
            Experiencia
          </Link>
        </li>
        <li className="flex-1">
          <Link
            smooth
            to="/#skills"
            onClick={() => scrollToSection("skills")}
            className="block text-center px-2 sm:px-4 hover:text-primary focus:text-primary font-semibold"
          >
            Skills
          </Link>
        </li>
        <li className="flex-1">
          <Link
            smooth
            to="/#educacion"
            onClick={() => scrollToSection("educacion")}
            className="block text-center px-2 sm:px-4 hover:text-primary focus:text-primary font-semibold"
          >
            Formación
          </Link>
        </li>
        <li className="flex-1">
          <Link
            smooth
            to="/#contacto"
            onClick={() => scrollToSection("contacto")}
            className="block text-center px-2 sm:px-4 hover:text-primary focus:text-primary font-semibold"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
