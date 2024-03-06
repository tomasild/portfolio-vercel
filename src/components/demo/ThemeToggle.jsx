import React from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useTheme } from "../ThemeProvider"; // Ajusta la ruta según la estructura de tus archivos.

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  // Asegúrate de importar themeOrder si no lo has hecho ya.
  const themeOrder = ["dark", "light"];

  const toggleTheme = () => {
    // Encuentra el índice del tema actual y cambia al siguiente tema en el orden de prioridad.
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  return (
    <button
      className="cursor-pointer bg-primary px-4 py-2 flex items-center"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <IoIosMoon size={20} className="mr-2" />
      ) : (
        <IoIosSunny size={20} className="mr-2" />
      )}
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
