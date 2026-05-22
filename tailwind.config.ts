import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jost)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
        display: ["var(--font-italiana)", "serif"],
        roman: ["var(--font-cinzel)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        offwhite: "#F4F1EC",
        bege: "#DDD3CB",
        greige: "#CFC7C0",
        taupe: "#B39B8F",
        brown: "#7B6E66",
        sage: "#A8B0A3",
        blush: "#D8B8B1",
        ink: "#2E2823",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}

export default config
