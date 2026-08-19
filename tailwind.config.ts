import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/components/(avatar|badge|button|card|chip|image|link|navbar|ripple|spinner).js",
    ],
    theme: {
        extend: {
            colors: {
                ink: "#111111",
                cream: "#F5F4EF",
                paper: "#EAE8DF",
                signal: "#2B3AFF",
                "signal-dark": "#1B22C2",
                acid: "#D6FF3F",
                muted: "#6E6E68",
                line: "#111111",
            },
            boxShadow: {
                hard: "6px 6px 0 0 #111111",
                "hard-sm": "4px 4px 0 0 #111111",
                "hard-signal": "6px 6px 0 0 #2B3AFF",
            },
            fontFamily: {
                display: ["var(--font-display)"],
                body: ["var(--font-body)"],
                mono: ["var(--font-mono)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [nextui()],
};
export default config;
