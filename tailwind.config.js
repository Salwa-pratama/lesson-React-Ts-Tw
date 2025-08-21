/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        tahoma: ["Tahoma", "sans-serif"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "10px",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },

      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496",
      },
      colors: {
        primary: "#2563eb",
        bg: "#020617",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
