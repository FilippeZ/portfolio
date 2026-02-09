import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0066ff",
                "background-light": "#f5f7f8",
                "background-dark": "#050505",
                "surface-dark": "#0A0A0A", // From portfolio
                "border-dark": "#222222",
                // Additional colors from other files for compatibility
                "zenith-bg": "#000000",
                "zenith-surface": "#0f1723",
                "zenith-border": "#20314b",
                "text-secondary": "#8da7ce",
            },
            fontFamily: {
                display: ["var(--font-inter)", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
                body: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
                'clinical-grid': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
};
export default config;
