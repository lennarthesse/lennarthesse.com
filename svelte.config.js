import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
		extensions: [".svelte", ".svx", ".md"],
		preprocess: [
			mdsvex({
				extensions: [".svx", ".md"]
			}),
		],
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: null,
			precompress: false,
			strict: true
		})
	}
};

export default config;
