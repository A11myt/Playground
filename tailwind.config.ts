import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
        },
        blue: {
          50: "var(--blue-50)",
          100: "var(--blue-100)",
          200: "var(--blue-200)",
          300: "var(--blue-300)",
          400: "var(--blue-400)",
          500: "var(--blue-500)",
          600: "var(--blue-600)",
          700: "var(--blue-700)",
          800: "var(--blue-800)",
        },
        orange: {
          50: "var(--orange-50)",
          100: "var(--orange-100)",
          200: "var(--orange-200)",
          300: "var(--orange-300)",
          400: "var(--orange-400)",
          500: "var(--orange-500)",
          600: "var(--orange-600)",
          700: "var(--orange-700)",
          800: "var(--orange-800)",
        },
        light: {
          50: "var(--light-50)",
          100: "var(--light-100)",
          200: "var(--light-200)",
          300: "var(--light-300)",
          400: "var(--light-400)",
          500: "var(--light-500)",
          600: "var(--light-600)",
          700: "var(--light-700)",
          800: "var(--light-800)",
          900: "var(--light-900)",
          950: "var(--light-950)",
        },
        polarnight: {
          50: "var(--polarnight-50)",
          100: "var(--polarnight-100)",
          200: "var(--polarnight-200)",
          300: "var(--polarnight-300)",
        },
        snowstorm: {
          50: "var(--snowstorm-50)",
          100: "var(--snowstorm-100)",
          200: "var(--snowstorm-200)",
        },
        frost: {
          50: "var(--frost-50)",
          100: "var(--frost-100)",
          200: "var(--frost-200)",
          300: "var(--frost-300)",
        },
        aurora: {
          50: "var(--aurora-50)",
          100: "var(--aurora-100)",
          200: "var(--aurora-200)",
          300: "var(--aurora-300)",
          400: "var(--aurora-400)",
        },
        futureGreen: {
          50: "var(--futureGreen-50)",
          100: "var(--futureGreen-100)",
        },
        futureOrange: {
          50: "var(--futureOrange-50)",
        },
      },
      fontWeight: {
        hairline: "100",
        extralight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      fontFamily: {
        PassionOne: ["PassionOne", "monospace"],
        ThedusCondensed: ["ThedusCondensed", "monospace"],
        ThedusStencil: ["ThedusStencil", "monospace"],
        ThedusWide: ["ThedusWide", "monospace"],
        Hack: ["Hack", "monospace"],
        DMMono: ["DMMono", "monospace"],
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      gridTemplateColumns: {
        mycols: "65% 35%",
      },

      animation: {
        slideOut: "slideOut 0.5s forwards",
        slideIn: "slideIn 0.5s forwards",
      },
      keyframes: {
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [
    // plugin(function ({ addComponents }) {
    //   const newComponents = {
    //     '.vertical-rl': {
    //       writingMode: 'vertical-rl'
    //     },
    //
    //   }
    //   addComponents(newComponents)
    // }),
  ],
};
export default config;