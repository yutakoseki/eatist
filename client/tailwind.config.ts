import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        default: {
                            DEFAULT: "#808080",
                            foreground: "#ffffff",
                        },
                        primary: {
                            DEFAULT: "#00008b",
                            foreground: "#ffffff",
                        },
                        secondary: {
                            DEFAULT: "#8b008b",
                            foreground: "#ffffff",
                        },
                        success: {
                            DEFAULT: "#008000",
                            foreground: "#ffffff",
                        },
                        warning: {
                            DEFAULT: "#a0522d",
                            foreground: "#ffffff",
                        },
                        danger: {
                            DEFAULT: "#b22222",
                            foreground: "#ffffff",
                        },
                    },
                },
                dark: {
                    colors: {
                        default: {
                            DEFAULT: "#808080",
                            foreground: "#ffffff",
                        },
                        primary: {
                            DEFAULT: "#00008b",
                            foreground: "#ffffff",
                        },
                        secondary: {
                            DEFAULT: "#8b008b",
                            foreground: "#ffffff",
                        },
                        success: {
                            DEFAULT: "#008000",
                            foreground: "#ffffff",
                        },
                        warning: {
                            DEFAULT: "#a0522d",
                            foreground: "#ffffff",
                        },
                        danger: {
                            DEFAULT: "#b22222",
                            foreground: "#ffffff",
                        },
                    },
                },
            },
        }),
    ],
};
export default config;