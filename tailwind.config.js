/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}", // Ensure Tailwind applies to all .js and .jsx files in src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Adding Poppins as a font family
      },
    },
  },
  plugins: [],
};
