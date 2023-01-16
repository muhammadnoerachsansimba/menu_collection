/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                dancing: ['"Dancing Script", "cursive"'],
                kalam: ['"kalam", "cursive"'],
                poppins: ['"Poppins", "sans-serif"'],
            },
        },
    },
    plugins: [],
}
