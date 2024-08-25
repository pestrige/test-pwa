import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugIn: Partial<VitePWAOptions> = {
	registerType: 'prompt',
	devOptions: { enabled: true },
	includeAssets: ['favicon.ico', "apple-touch-icon.png", "masked-icon.svg"],
	manifest: {
		name: "T-Bank",
		short_name: "T-Bank",
		description: "T-Bank",
		icons: [{
			src: '/android-chrome-192x192.png',
			sizes: '192x192',
			type: 'image/png',
			purpose: 'favicon'
		},
			{
				src: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'favicon'
			},
			{
				src: '/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
				purpose: 'apple touch icon',
			},
			{
				src: '/maskable_icon.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any maskable',
			}
		],
		theme_color: '#171717',
		background_color: '#f0e7db',
		display: "standalone",
		scope: '/',
		start_url: "/",
		orientation: 'portrait',
	}
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), mkcert(), VitePWA(manifestForPlugIn)],
	server: {
		https: true,
		host: true
	}
})
