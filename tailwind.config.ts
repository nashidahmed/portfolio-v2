import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryBg: "#FFF0DD",
        secondaryBg: "#252525",
        primaryText: "#515AD4",
      },
      fontFamily: {
        bigShoulders: ['"Big Shoulders Display"', "sans-serif"],
        switzer: ['"Switzer"', "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
