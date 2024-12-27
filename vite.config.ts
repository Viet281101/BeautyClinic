import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: '/BeautyClinic/',
	server: {
		port: 5173,
		host: 'localhost',
		strictPort: true,
	},
	plugins: [react()],
	esbuild: {
		jsxFactory: 'jsx',
		jsxFragment: 'Fragment',
		jsxInject: `import { jsx, css } from '@emotion/react'`,
	},
});
