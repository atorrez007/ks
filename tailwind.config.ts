import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      violet200: "#ddd6fe",
      pink200: "#fbcfe8",
      // slate900: "#0f172a",
      slate500: "#64748b",
      terminalGreen: "#66FF66",
      darkGreen: "#00ff66",
      otherDarkGreen: "#16a34a",
      darkMode: "#181825",
    },
    screens: {
      xs: "350px",
      md: "768px",

      lg: "1024px",

      xl: "1280px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
