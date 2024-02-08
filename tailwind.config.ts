import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			boxShadow: {
				button: '0px -9px 0px 0px #0000002E inset',
				'button-active': '0px -5px 0px 0px #0000002E inset',
			},
			gridTemplateColumns: {
				'cards-big': 'repeat(auto-fill, minmax(20rem, 1fr))',
				'cards-sm': 'repeat(auto-fill, minmax(15rem, 1fr))',
			},
			screens: {
				'laptop-l': '1440px',
				mobile: '425px',
			},
		},
	},
	plugins: [],
}
export default config
