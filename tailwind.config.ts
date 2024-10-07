import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          customBlue: '#0065DB', // Misalnya, menambahkan warna biru kustom
          customYellow: '#FBBF24', // Warna kuning kustom
          customGreen: '#10B981', // Warna hijau kustom
        },
    },
  },
  plugins: [],
};
export default config;
