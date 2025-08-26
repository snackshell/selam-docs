import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme.config.jsx",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(23, 23, 23)',
        foreground: 'rgb(255, 255, 255)',
        'muted-foreground': 'rgb(161, 161, 170)',
        'sidebar-active': 'rgb(39, 39, 42)',
        border: 'rgb(63, 63, 70)',
        'code-bg': 'rgb(30, 30, 30)',
        primary: {
          DEFAULT: 'rgb(255, 255, 255)',
          foreground: 'rgb(0, 0, 0)',
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
