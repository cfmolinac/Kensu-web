import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'kensu-blue': '#2A3A69',
        'kensu-orange': '#F58A4B',
        'kensu-green': '#95C93D',
        'kensu-light-gray': '#F7F8FA',
      },
    },
  },
  plugins: [],
};

export default config;
