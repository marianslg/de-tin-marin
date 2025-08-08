/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,astro}" // ajustá según tu estructura
  ],
  theme: {
    extend: {
      colors: {
        primary: "#019CDA",
        secondary: "#D26472",
        accent1: "#E79167",
        accent2: "#FFD54F",
        success: "#8BC34A",
        bg: "#F7F7F7",
        surface: "#FFFFFF",
        "text-primary": "#2E2E2E",
        "text-secondary": "#6E6E6E",
        border: "#E2E2E2",
        "warning-bg": "#E9DEAA",
        "near-black": "#020202"
      },
      borderRadius: {
        DEFAULT: "8px"
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.08)"
      },
fontSize: {
        // Sobreescribimos el 4xl por defecto
        '4xl': ['2.5rem', { lineHeight: '1' }],
      }
    },
    fontFamily: {
      harrypotter: ['"HarryPotter"', 'sans-serif'],
      CreamCake: ['"Cream Cake Bold"', 'sans-serif'],
      DancingScript: ['"Dancing Script"', 'sans-serif'],
      Poppins: ['"Poppins"', 'sans-serif'],
    },

  },
  plugins: []
};
