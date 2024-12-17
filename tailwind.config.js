/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            bayern: {
                'light': '#3B8FD9',
                'medium': '#123C73',
                'dark': '#123C73',
                'white': '#EBEFF2',
                'eggwhite': '#BACBD9'
            }
        }
    },
    plugins: [],
    darkMode: ['class', '.darkmode'],
}