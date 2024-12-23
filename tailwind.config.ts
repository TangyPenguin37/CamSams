import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				futura: ['Futura', 'sans-serif']
			}
		}
	},

	plugins: []
} satisfies Config;
