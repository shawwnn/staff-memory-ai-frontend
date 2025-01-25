
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E5A00D", // Plex yellow-orange
        "primary-light": "#F5B732", // Lighter shade of primary
        "primary-dark": "#C47D0A", // Darker shade of primary
        secondary: "#282A36", // Dark background
        "secondary-light": "#3C3F4C", // Lighter shade of secondary
        "secondary-dark": "#1E212A", // Darker shade of secondary
        accent: "#9DA5B4", // Muted blue-gray
        "accent-light": "#BCC4D0", // Lighter shade of accent
        "accent-dark": "#7E8692", // Darker shade of accent
        text: "#FFFFFF", // White text
        muted: "#B0B3B8", // Muted gray text
        "muted-light": "#D1D4D7", // Lighter shade of muted text
        "muted-dark": "#7A7F85", // Darker shade of muted text
        card: "#1E1E1E", // Card background
        "card-light": "#2A2A2A", // Lighter shade of card background
        "card-dark": "#141414", // Darker shade of card background
        border: "#3A3A3A", // Soft borders
        "border-light": "#5C5C5C", // Lighter shade of border
        "border-dark": "#1E1E1E", // Darker shade of border
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      spacing: {
        4: "1rem",
        8: "2rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
      },
      transitionProperty: {
        width: "width",
        opacity: "opacity",
        transform: "transform",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        fast: "150ms",
        slow: "500ms",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0, 0, 0, 0.15)",
        medium: "0 4px 20px rgba(0, 0, 0, 0.25)",
        strong: "0 6px 30px rgba(0, 0, 0, 0.35)",
      },
      opacity: {
        80: "0.8",
        90: "0.9",
        100: "1",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};