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
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to right, #2563eb, #1d4ed8)',
        'repeating-radial-gradient': 'repeating-radial-gradient(circle closest-corner at 5% 1px, #1e3a8a, #1e3a8a 50px, #60a5fa 50px, #60a5fa 100px)',
      },
      backgroundSize: {
        'wave-pattern': '200px 200px',
      },
    },
  },
  plugins: [],
} satisfies Config;
