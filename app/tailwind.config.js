/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F1115",
        slate2: "#141821",
        sand: "#EDEDED",
        gold: "#C6A34F",
        muted: "#A9AFBC",
        line: "rgba(255,255,255,0.08)",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
