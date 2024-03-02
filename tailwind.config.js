/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        moveBackground: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "100% 0",
          },
        },
        desplazamientoSatelite: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        orbitaSinusoidal: {
          '0%': {
            transform: 'translateX(0vw) translateY(0)',
          },
          '25%': {
            transform: 'translateX(25vw) translateY(-10vw)',
          },
          '50%': {
            transform: 'translateX(50vw) translateY(0)',
          },
          '75%': {
            transform: 'translateX(75vw) translateY(10vw)',
          },
          '100%': {
            transform: 'translateX(100vw) translateY(0)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 6s linear infinite",
        "spin-reverse": "spin-reverse 5s linear infinite",
        "moveBackground": "moveBackground 20s linear infinite",
        "satelite": 'desplazamientoSatelite 5s linear infinite',
        'orbita-sinusoidal': 'orbitaSinusoidal 20s linear infinite',
      },
      backgroundImage: (theme) => ({
        "proesthetic-fit": "url('/clinica.jpg')",
        "angin": "url('/angin.png')",
        "fx": "url('/angin.png')",
        "groovelist": "url('/angin.png')",
        "otro-proyecto": "url('/angin.png')",
        "noche": "url('/noche.jpg')",
      }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
};
