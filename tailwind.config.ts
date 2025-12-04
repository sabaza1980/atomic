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
        ao: {
          navy: "#04142F",
          "navy-soft": "#0B1E46",
          teal: "#14D0C5",
          "teal-soft": "#5EE0D6",
          coral: "#F26A3D",
          magenta: "#B4307A",
          sky: "#1CA4F5",
          white: "#FFFFFF",
          offwhite: "#F5F7FB",
          gray100: "#E3E7F0",
          gray500: "#687086",
          gray800: "#1F2430",
          black: "#02040A",
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1" }],
        "h1": ["2.375rem", { lineHeight: "1.2" }],
        "h2": ["1.875rem", { lineHeight: "1.3" }],
        "h3": ["1.5rem", { lineHeight: "1.4" }],
        "h4": ["1.25rem", { lineHeight: "1.5" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        caption: ["0.875rem", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
