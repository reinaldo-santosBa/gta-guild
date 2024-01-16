import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@components': '/src/components',
			'@hooks': '/src/hooks',
			'@pages': '/src/pages',
			'@utils': '/src/utils',
			'@routes': '/src/routes',
			'@domain': '/src/domain',
		},
	},
	plugins: [react()],
});
