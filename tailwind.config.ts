import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chartreuse: {
          DEFAULT: "#CAEF45",
          dark: "#a8c934",
          light: "#d8f56a",
        },
        gunmetal: {
          DEFAULT: "#1E2530",
          light: "#2a3340",
          lighter: "#364050",
          dark: "#141920",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "noise": "url('/noise.svg')",
      },
    },
  },
  plugins: [],
};

export default config;