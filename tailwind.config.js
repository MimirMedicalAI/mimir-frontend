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

                /**
                 * If you'd like to use a "muted" color for code blocks,
                 * define it here. For example:
                 */
                muted: "hsl(var(--muted))",
            },
        },
    },

    plugins: [
        require("tailwindcss-animate"),

        plugin(function ({addBase}) {
            addBase({
                h1: {
                    "@apply text-gray-800 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl":
                        {},
                },
                h2: {
                    "@apply text-gray-800 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0":
                        {},
                },
                h3: {
                    "@apply text-gray-800 scroll-m-20 text-2xl font-semibold tracking-tight": {},
                },
                h4: {
                    "@apply text-gray-800 scroll-m-20 text-xl font-semibold tracking-tight": {},
                },

                p: {
                    "@apply text-gray-800 leading-7": {},
                },

                small: {
                    "@apply text-gray-600 text-sm leading-7": {},
                },
                
            });
        }),
    ],
};
