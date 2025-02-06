/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    primary: "hsl(var(--sidebar-primary))",
                    "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    ring: "hsl(var(--sidebar-ring))",
                },
                primary: '#362BFF',
                yellowAccent: '#D7FD51',
                orangeAccent: '#EC5E2A',
                pinkAccent: '#F092F7',
                blueAccent: '#2356EA',
                blackAccent: '#0A1029',
                success: '#64DA41',
                error: '#E5322C',
                'shade-100': '#FFFFFF',
                'shade-200': '#F5F5F5',
                'shade-300': '#E5E5E5',
                'shade-400': '#B3B3B3',
                'shade-500': '#8C8C8C',
                'shade-600': '#666666',
                'shade-700': '#333333',
                'shade-800': '#000000',
                muted: "hsl(var(--muted))",
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
        },
    },

    plugins: [
        require("tailwindcss-animate"),

        plugin(function ({addBase}) {
            addBase({
                // H1 - Inter Semi Bold, 31px, 120% line height
                h1: {
                    "@apply font-inter font-semibold text-[31px] leading-[120%]": {},
                },
                // H2 - Inter Semi Bold, 25px, 140% line height
                h2: {
                    "@apply font-inter font-semibold text-[25px] leading-[140%]": {},
                },
                // H3 - Inter Medium, 20px, 120% line height
                h3: {
                    "@apply font-inter font-medium text-[20px] leading-[120%]": {},
                },
                // H4/Subtitle 1 - Inter Bold, 16px, 140% line height
                h4: {
                    "@apply font-inter font-bold text-[16px] leading-[140%]": {},
                },
                // H5/Subtitle 2 - Inter Bold, 14px, 140% line height
                h5: {
                    "@apply font-inter font-bold text-[14px] leading-[140%]": {},
                },
                // Body 1 - Inter Medium, 16px, 180% line height
                '.body-1': {
                    "@apply font-inter font-medium text-[16px] leading-[180%]": {},
                },
                // Body 2 - Inter Medium, 14px, 180% line height
                '.body-2': {
                    "@apply font-inter font-medium text-[14px] leading-[180%]": {},
                },
                // Caption - Inter Regular, 12px/16px
                '.caption': {
                    "@apply font-inter font-normal text-[12px] leading-[16px]": {},
                },
                // Overline - Inter Bold, 10px/16px
                '.overline': {
                    "@apply font-inter font-bold text-[10px] leading-[16px] uppercase": {},
                },
                // Button text - Inter Medium, 14px/16px
                '.button-text': {
                    "@apply font-inter font-medium text-[14px] leading-[16px] uppercase": {},
                },
            });
        }),
    ],
};