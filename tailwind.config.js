/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				'custom-pink': '0px 12px 24px rgba(224, 84, 151, 0.3)',
				'btn-pink': '0px 17px 22px rgba(255, 237, 246, 1)',
			},
		},
	},
	plugins: [],
}
