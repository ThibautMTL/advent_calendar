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
        "primary": "#fbe7c6",
        "secondary":"#c55a3a",
        "dark": "#1d2228",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderWidth: {
        "5": "20px",
      },
      fontFamily: {
        'alfa': ['"Alfa Slab One"', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
