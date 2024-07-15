/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#000000",        // Black background color
        lightText: "#FFFFFF",        // White text color
        designColor: "#15668e",
              
      },
      
      boxShadow: {
        shadowOne: "5px 5px 10px rgba(0, 0, 0, 0.2)",
      },    
    },
  },
  plugins: [],
};
