/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["Atkinson Hyperlegible", "sans-serif"],
		},
		container: {
			padding: {
				DEFAULT: '1rem'
			}
		}
	},
	plugins: [],
}
