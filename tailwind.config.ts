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
        black_app: "#3f3f3f"
      },
      padding : {
        main_px : "4rem"
      },
    },
  },
  plugins: [],
} satisfies Config;
