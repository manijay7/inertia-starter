import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#fffdf5",
                    100: "#fff9db",
                    200: "#fff3b1",
                    300: "#ffec88",
                    400: "#ffe35e",
                    500: "#fbe77f", // Primary color
                    600: "#e6cc66",
                    700: "#ccae53",
                    800: "#b09141",
                    900: "#94732f",
                },
                secondary: {
                    50: "#edf9f1",
                    100: "#d1f1dc",
                    200: "#b3e9c6",
                    300: "#92e0af",
                    400: "#72d798",
                    500: "#009b4d", // Secondary color
                    600: "#008742",
                    700: "#007439",
                    800: "#005c2f",
                    900: "#004425",
                },
                tertiary: {
                    50: "#1d1d12",
                    100: "#1d1e23",
                    200: "#1d1e23",
                    300: "#1d1e23",
                    400: "#1d1e23",
                    500: "#171923", // Tertiary color
                    600: "#171923",
                    700: "#171923",
                    800: "#171923",
                    900: "#171923",
                },
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["hover", "focus", "active"], // Separate each variant with a comma
            borderColor: ["hover", "focus", "active"], // Separate each variant with a comma
            textColor: ["hover", "focus", "active"], // Separate each variant with a comma
        },
    },
    darkMode: "class",
    plugins: [forms, typography],
};
