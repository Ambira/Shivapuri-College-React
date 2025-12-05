import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
        scblue: "#0B5FFF",
        scgold: "#F6C23E"
      }},
  },
  plugins: [
    flowbite(),
  ],
};
