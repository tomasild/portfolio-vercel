import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// Declara un componente funcional llamado ThemeProvider.
export const ThemeProvider = ({ children }) => {
    // Define un array con el orden de prioridad de los temas.
    const themeOrder = ['dark', 'light'];

    // Utiliza el hook useState para gestionar el estado del tema.
    const [theme, setTheme] = useState(() => {
        // Intenta obtener el tema almacenado en el localStorage.
        const storedTheme = localStorage.getItem('theme');

        // Si el tema almacenado está en el array de orden de prioridad, úsalo; de lo contrario, utiliza el primer tema del array.
        return themeOrder.includes(storedTheme) ? storedTheme : themeOrder[0];
    });

    // Utiliza el hook useEffect para actualizar el tema en el DOM y almacenar el tema en el localStorage cada vez que cambia.
    useEffect(() => {
        const root = window.document.documentElement;
        // Elimina las clases 'light' y 'dark' del elemento raíz.
        root.classList.remove(...themeOrder);
        // Agrega la clase del tema actual al elemento raíz.
        root.classList.add(theme);

        // Almacena el tema actual en el localStorage.
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Retorna el proveedor de contexto con el valor del contexto que contiene el estado actual del tema y la función para cambiar el tema.
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// ...

export const useTheme = () => useContext(ThemeContext);
