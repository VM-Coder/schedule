import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@src', replacement: path.resolve('src') },
			{ find: '@assets', replacement: path.resolve('src/assets') },
			{ find: '@pages', replacement: path.resolve('src/pages') },
			{ find: '@widgets', replacement: path.resolve('src/widgets') },
			{ find: '@entities', replacement: path.resolve('src/entities') },
		],
	},
});
