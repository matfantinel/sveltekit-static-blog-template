import { defaultColors, defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	plugins: [HstSvelte()],
	theme: {
		title: 'Histoire',
		logo: {
			square: './static/favicons/favicon.png',
			light: './static/favicons/favicon.png',
			dark: './static/favicons/favicon.png'
		},
		favicon: './static/favicons/favicon.ico',
		colors: {
			primary: defaultColors.purple
		}
	}
});
