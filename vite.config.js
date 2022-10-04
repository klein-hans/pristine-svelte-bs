import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],

	resolve: {
		alias: {
			$components: resolve('./src/components'),
			$store: resolve('./src/store'),
			$hooks: resolve('./src/hooks'),
			$helpers: resolve('./src/helpers'),
			$styles: resolve('./src/styles'),
			$assets: resolve('./src/assets')
			// $models: resolve(__dirname, './src/lib/models'),
			// $data: resolve(__dirname, './src/lib/data'),
			// $environment: resolve(__dirname, './src/environments')
		}
	}

	// css: {
	// 	preprocessorOptions: {
	// 		scss: {
	// 			additionalData: '@use "src/assets/scss/material-kit.scss" as *;'
	// 		}
	// 	}
	// }
};

export default config;
