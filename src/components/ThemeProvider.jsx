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
        
        // Si hay un tema guardado en el localStorage y está en el array de temas, úsalo; si no, usa 'dark' como predeterminado.
        return themeOrder.includes(storedTheme) ? storedTheme : 'dark';
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

// Hook personalizado para acceder al tema
export const useTheme = () => useContext(ThemeContext);


/* import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const themeOrder = ['dark', 'light'];
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return themeOrder.includes(storedTheme) ? storedTheme : themeOrder[0];
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(...themeOrder);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useTheme = () => useContext(ThemeContext);
 */