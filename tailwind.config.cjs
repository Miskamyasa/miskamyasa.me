/* eslint-disable @typescript-eslint/no-var-requires */

/* @type {import('tailwindcss/defaultTheme')} */
const defaultTheme = require("tailwindcss/defaultTheme")


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "rgb(17, 62, 113)",
                darker: "rgb(12, 44, 81)",
            },
            fontFamily: {
                sans: ["Outfit Variable", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                "overlay-show": {from: {opacity: 0}, to: {opacity: 1}},
                "overlay-hide": {from: {opacity: 1}, to: {opacity: 0}},
                "content-show": {
                    from: {opacity: 0, transform: "scale(0.96)"},
                    to: {opacity: 1, transform: "scale(1)"},
                },
                "content-hide": {
                    from: {opacity: 1, transform: "scale(1)"},
                    to: {opacity: 0, transform: "scale(0.96)"},
                },
            },
            animation: {
                "overlay-show": "overlay-show 0.2s ease-out",
                "overlay-hide": "overlay-hide 0.2s ease-out",
                "content-show": "content-show 0.2s ease-out",
                "content-hide": "content-hide 0.2s ease-out",
            },
        },
    },
    plugins: [
        require("@kobalte/tailwindcss"),
        function ({addComponents, addBase, theme}) {
            addBase({
                body: {
                    color: theme("colors.black.700"),
                },
                "h1": {
                    "font-size": "1.61rem",
                    "font-weight": "600",
                },
                "h2": {
                    "font-size": "1.41rem",
                    "font-weight": "600",
                },
                "h3": {
                    "font-size": "1.21rem",
                    "font-weight": "500",
                },
                "h4": {
                    "font-weight": "500",
                },
                "main": {
                    "margin-bottom": theme("spacing.2"),
                },
                "section": {
                    "margin-block": theme("spacing.2"),
                },
                "p": {
                    "margin": `${theme("spacing.2")} 0`,
                },
            }),
            addComponents({
                ".outlined": {
                    // outline-none focus-visible:outline-sky-600 focus-visible:outline-offset-2
                    "outline": "none",
                    "&:focus-visible": {
                        "outline": `2px solid ${theme("colors.sky.600")}`,
                        "outline-offset": "2px",
                    },
                },
                ".btn": {
                    "display": "inline-flex",
                    "justify-content": "center",
                    "align-items": "center",
                    "height": theme("spacing.10"),
                    "width": "auto",
                    "border-radius": theme("borderRadius.lg"),
                    "padding": `${theme("spacing.2")} ${theme("spacing.4")}`,
                    "background-color": theme("colors.sky.600"),
                    "color": theme("colors.sky.50"),
                    "line-height": "0",
                    "transition": "250ms background-color",
                    "outline": "none",
                    "&:hover": {
                        "background-color": theme("colors.sky.700"),
                    },
                    "&:active": {
                        "background-color": theme("colors.sky.700"),
                    },
                    "&:focus-visible": {
                        "outline": `2px solid ${theme("colors.sky.600")}`,
                        "outline-offset": "2px",
                    },
                },
                ".overlay": {
                    "position": "fixed",
                    "inset": "0",
                    "z-index": "50",
                    "display": "flex",
                    "justify-content": "center",
                    "align-items": "center",
                    "background-color": "rgba(0, 0, 0, 0.5)",
                },
                ".overlay-positioner": {
                    "position": "fixed",
                    "inset": "0",
                    "z-index": "51",
                    "display": "flex",
                    "justify-content": "center",
                    "align-items": "center",
                },
                ".overlay-content": {
                    "max-width": `min(calc(100vw - ${theme("spacing.4")}), 500px)`,
                    "background-color": theme("colors.gray.50"),
                    "border-radius": theme("borderRadius.lg"),
                    "box-shadow": theme("boxShadow.lg"),
                    "margin": "10vh auto auto",
                    "z-index": "52",
                    "padding": `${theme("spacing.2")} ${theme("spacing.6")}`,
                    "@screen lg": {
                        "padding": `${theme("spacing.4")} ${theme("spacing.8")}`,
                    },
                },
                ".container": {
                    "margin": "0 auto",
                    "max-width": theme("maxWidth.5xl"),
                    "padding": 0,
                },
                ".row": {
                    "display": "flex",
                    "justify-content": "space-between",
                    "align-items": "center",
                },
            })
        },
    ],
}
