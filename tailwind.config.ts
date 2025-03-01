import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Ensures dark mode works with the class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;




// /** @type {import('tailwindcss').Config} */

// export default {
//   darkMode: "class", // Use 'class' mode instead of 'media'
//   content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
