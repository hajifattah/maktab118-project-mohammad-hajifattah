import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green_app : "#1ab41e",
        black_app: "#242424",
        blue_app: "#0c4a6e",
        blue_app_menu: "#0d1020",
      },
      padding : {
        main_px : "4rem"
      },
      screens : {
        xs_app : "25rem"
      }
    },
  },
  plugins: [],
} satisfies Config;
