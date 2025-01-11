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
        "text-color": "var(--text-color)",
      },
      boxShadow:{
        "3xl":"0px 0px 13px -5px rgba(255,0,0,1)"
      },
      animation:{
        spin: 'spin 1.5s linear infinite ',
        show: 'show 0.4s linear forwards ',
      },
      keyframes: {
        spain: {
         to:{
          transform:"rotate(360deg)",
         }
        },
        show:{
          to:{
            opacity: "1",
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
