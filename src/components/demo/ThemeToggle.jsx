import React from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useTheme } from "../ThemeProvider"; // Ajusta la ruta según la estructura de tus archivos.
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const themeOrder = ["dark", "light"];

  const toggleTheme = () => {
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  return (
    <Button
      variant="primary"
      className={`cursor-pointer px-4 py-2 flex items-center justify-center ${
        theme === "light" ? "bg-accent text-white" : "bg-primary text-white"
      }`} // Clases dinamicas
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <>
          <IoIosMoon size={20} /> 
          <span className="ml-2">Modo oscuro</span> 
        </>
      ) : (
        <>
          <IoIosSunny size={20} /> 
          <span className="ml-2">Modo claro</span> 
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;
