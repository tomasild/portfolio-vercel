import React from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useTheme } from "../ThemeProvider"; // Ajusta la ruta según la estructura de tus archivos.
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const themeOrder = ["light", "dark"];

  const toggleTheme = () => {
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  return (
    <Button
      variant="primary"
      className={`cursor-pointer p-2 w-7 h-7 lg:w-9 lg:h-9 flex rounded-full ${
        theme === "light"
          ? "bg-black bg-opacity-60 text-white hover:bg-opacity-100"
          : "bg-white bg-opacity-70 text-black hover:bg-opacity-100"
      }`} // Clases dinamicas
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <>
          <IoIosMoon size={18} />
          {/* <span className="ml-2">Modo oscuro</span>  */}
        </>
      ) : (
        <>
          <IoIosSunny size={18} />
          {/* <span className="ml-2">Modo claro</span>  */}
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;
