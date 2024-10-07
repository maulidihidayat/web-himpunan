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
          customPink: '#EA1565', // Warna kuning kustom
          customYellow: '#FDE86F', // Warna hijau kustom
          customGreen: '#65DB00', // Warna hijau kustom
          customDarkBlue: '#005AAB', // Warna hijau kustom
          customDarkenBlue: '#26136A', // Warna hijau kustom
        },
    },
  },
  plugins: [],
};
export default config;
