import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        card: "#111827",
        accent: "#FACC15",
        accent2: "#22C55E",
        text: "#E5E7EB",
      },
      boxShadow: {
        glow: "0 0 30px rgba(250, 204, 21, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
