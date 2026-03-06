/** @type {import('tailwindcss').Config} */

export default {

  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      /* ---------------- FONT ---------------- */

      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },

      /* ---------------- COLORS ---------------- */

      colors: {

        /* Background */
        bg: {
          primary: "#F5F5F7",
          surface: "#FFFFFF",
          muted: "#F5F5F7",
        },

        /* Text */
        text: {
          primary: "#111827",
          secondary: "#4B5563",
          muted: "#6B7280",
        },

        /* Border */
        border: {
          DEFAULT: "#E5E7EB",
          strong: "#D1D5DB",
        },

        /* Primary */
        primary: {
          DEFAULT: "#5B21B6",
          hover: "#4C1D95",
          soft: "#EDE9FE",
        },

        /* Dark Mode Tokens */
        darkbg: {
          primary: "#0B0F19",
          surface: "#111827",
          muted: "#0B1224",
        },

        darktext: {
          primary: "#E5E7EB",
          secondary: "#CBD5E1",
          muted: "#94A3B8",
        },

        darkborder: {
          DEFAULT: "#1F2937",
          strong: "#334155",
        },

        darkprimary: {
          DEFAULT: "#6D28D9",
          hover: "#5B21B6",
          soft: "#22123D",
        },
      },

      /* ---------------- TYPOGRAPHY ---------------- */

      fontSize: {

        h1: ["32px", { lineHeight: "40px", fontWeight: "700" }],

        h2: ["24px", { lineHeight: "32px", fontWeight: "600" }],

        h3: ["18px", { lineHeight: "26px", fontWeight: "600" }],

        body: ["14px", { lineHeight: "22px" }],

        small: ["13px", { lineHeight: "20px" }],

        caption: ["12px", { lineHeight: "18px" }],
      },

      /* ---------------- SPACING ---------------- */

      spacing: {

        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",

        "2xl": "40px",
        "3xl": "48px",
        "4xl": "64px",
      },

      /* ---------------- BORDER RADIUS ---------------- */

      borderRadius: {

        sm: "6px",
        md: "8px",
        DEFAULT: "12px",

        card: "16px",
        modal: "20px",

        full: "9999px",
      },

      /* ---------------- SHADOW ---------------- */

      boxShadow: {

        elevation1: "0 1px 2px rgba(0,0,0,0.05)",

        elevation2: "0 4px 12px rgba(0,0,0,0.08)",

        elevation3: "0 8px 20px rgba(0,0,0,0.10)",

        elevation4: "0 12px 30px rgba(0,0,0,0.15)",
      },

    },
  },

  plugins: [],
}