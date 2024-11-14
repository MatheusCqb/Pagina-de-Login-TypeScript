import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: { // Primary Collors 
          50: '#FDEEFF',
          100: '#F5CCFF',
          200: '#E8AAFF',
          300: '#D68AFF',
          400: '#C06AFF',
          500: '#A84DFF',
          600: '#8E33FF',
          700: '#751EF4',
          800: '#5D11CC',
          900: '#480E9D'
      },
      secondary: { // Secondary Collors
          50: '#F5F2FB',
          100: '#E0DAF1',
          200: '#CCC2E6',
          300: '#B7AAD4',
          400: '#A294C4',
          500: '#8D7FB1',
          600: '#785A9C',
          700: '#634785',
          800: '#4D356D',
          900: '#3C2A53'
      },
      tertiary: { // tertiary Collors
          50: '#FFEEF1',
          100: '#FFCBD5',
          200: '#FFA8BB',
          300: '#FF85A2',
          400: '#FF638A',
          500: '#DA2161',
          600: '#BD004F',
          700: '#9C003E',
          800: '#78002F',
          900: '#530020'
      },
    },
    },
  },
  plugins: [],
} satisfies Config;
