import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],
    mode: "jit",
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "15px",
                sm: "15px",
                lg: "15px",
                xl: "0",
                "2xl": "0",
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1280px",
            },
        },
        extend: {
            colors: {
                primary: {
                    50: "#F6F8FF",
                    100: "#EDF0FF",
                    200: "#D1DAFE",
                    300: "#B4C2FD",
                    400: "#8092FF",
                    500: "#4669fa",
                    600: "#3F5EDF",
                    700: "#2A3F96",
                    800: "#203071",
                    900: "#151F49",
                },
                secondary: {
                    50: "#F9FAFB",
                    100: "#F4F5F7",
                    200: "#E5E7EB",
                    300: "#D2D6DC",
                    400: "#9FA6B2",
                    500: "#A0AEC0",
                    600: "#475569",
                    700: "#334155",
                    800: "#1E293B",
                    900: "#0F172A",
                },
                danger: {
                    50: "#FFF7F7",
                    100: "#FEEFEF",
                    200: "#FCD6D7",
                    300: "#FABBBD",
                    400: "#F68B8D",
                    500: "#F1595C",
                    600: "#D75052",
                    700: "#913638",
                    800: "#6D292A",
                    900: "#461A1B",
                },
                black: {
                    50: "#F9FAFB",
                    100: "#F4F5F7",
                    200: "#E5E7EB",
                    300: "#D2D6DC",
                    400: "#9FA6B2",
                    500: "#111112",
                    600: "#475569",
                    700: "#334155",
                    800: "#1E293B",
                    900: "#0F172A",
                },
                warning: {
                    50: "#FFFAF8",
                    100: "#FFF4F1",
                    200: "#FEE4DA",
                    300: "#FDD2C3",
                    400: "#FCB298",
                    500: "#FA916B",
                    600: "#DF8260",
                    700: "#965741",
                    800: "#714231",
                    900: "#492B20",
                },
                info: {
                    50: "#F3FEFF",
                    100: "#E7FEFF",
                    200: "#C5FDFF",
                    300: "#A3FCFF",
                    400: "#5FF9FF",
                    500: "#0CE7FA",
                    600: "#00B8D4",
                    700: "#007A8D",
                    800: "#005E67",
                    900: "#003F42",
                },
                success: {
                    50: "#F3FEF8",
                    100: "#E7FDF1",
                    200: "#C5FBE3",
                    300: "#A3F9D5",
                    400: "#5FF5B1",
                    500: "#50C793",
                    600: "#3F9A7A",
                    700: "#2E6D61",
                    800: "#1F4B47",
                    900: "#0F2A2E",
                },
                gray: {
                    50: "#F9FAFB",
                    100: "#F4F5F7",
                    200: "#E5E7EB",
                    300: "#D2D6DC",
                    400: "#9FA6B2",
                    500: "#68768A",
                    600: "#475569",
                    700: "#334155",
                    800: "#1E293B",
                    900: "#0F172A",
                },
                light: "#425466",
                dark: "#1E293B",
                "dark-gray": "#0F172A",
                "dark-light": "#CBD5E1",
            },
            fontFamily: {
                Inter: ["Inter", "sans-serif"],
            },

            // keyframes: {
            //     zoom: {
            //         "0%, 100%": { transform: "scale(0.5)" },
            //         "50%": { transform: "scale(1)" },
            //     },
            //     tada: {
            //         "0%": { transform: "scale3d(1, 1, 1)" },
            //         "10%, 20%": {
            //             transform:
            //                 "scale3d(1, 1, 0.95) rotate3d(0, 0, 1, -10deg)",
            //         },
            //         "30%, 50%, 70%, 90%": {
            //             transform: "scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg)",
            //         },
            //         "40%, 60%, 80%": {
            //             transform: "rotate3d(0, 0, 1, -10deg)",
            //         },
            //         "100%": { transform: "scale3d(1, 1, 1)" },
            //     },
            // },
            // animation: {
            //     "spin-slow": "spin 3s linear infinite",
            //     zoom: "zoom 1s ease-in-out infinite",
            //     tada: "tada 1.5s ease-in-out infinite",
            // },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["hover", "focus", "active"], // Separate each variant with a comma
            borderColor: ["hover", "focus", "active"], // Separate each variant with a comma
            textColor: ["hover", "focus", "active"], // Separate each variant with a comma
        },
    },
    plugins: [forms, typography],
};
