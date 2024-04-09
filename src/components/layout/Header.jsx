// En el componente Header.js
import { HashLink as Link } from "react-router-hash-link";
import ThemeToggle from "../demo/ThemeToggle";
import duck from "../../../public/duck.svg";
import React, { useState } from "react";

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

  const [isFlipped, setIsFlipped] = useState(false); // Estado para controlar la clase de flip

  const scrollToTop = () => {
    setIsFlipped(true); // Agrega la clase de flip al hacer clic
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      setIsFlipped(false);
    }, 1000);
  };

  return (
    <nav aria-label="Main navigation">
      <ul className="flex w-full py-1 justify-between items-center h-14">
        <li className="block pl-2 sm:pl-6 hover:text-primary focus:text-primary font-semibold">
          <button
            onClick={scrollToTop}
            className={`focus:outline-none ${
              isFlipped ? "flip-animation" : ""
            }`}
          >
            <img src={duck} alt="Duck" className="h-7 w-7  opacity-70 active:opacity-100" />
          </button>
        </li>
        {/* <li className="flex-1">
          <Link
            smooth
            to="/#sobre-mi"
            onClick={() => scrollToSection("sobre-mi")}
            className="block px-2 sm:px-4 hover:text-primary focus:text-primary font-semibold"
          >
            Sobre mí
          </Link>
        </li> */}
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
        <li className="pr-2 block sm:hidden md:hidden">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
