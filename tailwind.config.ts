import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        red: "#AB0433",
        orange: "#FF753A",
        black: "#252525",
        darkgrey: "#505050",
        grey: "#767676",
        lightgrey: "#EAEAEA",
        silver: "#F6F6F6",
      },
      fontFamily: {
        worksans: ["var(--font-worksans)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadein: "fadeIn 0.6s",
      },
    },
  },
  plugins: [],
};
export default config;
