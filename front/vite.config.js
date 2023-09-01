import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		cors: true, // Permettre les requêtes cross-origin (CORS)
	},
	resolve: {
		alias: {
			// Ajoutez des alias pour les dépendances ou fichiers externes si nécessaire
			// Exemple: 'react-responsive-carousel': 'react-responsive-carousel/dist/react-responsive-carousel.js'
		},
	},
	optimizeDeps: {
		include: ['js-cookie'], // Inclure js-cookie dans les dépendances optimisées
	},
	esbuild: {
		// Ajoutez cette ligne pour spécifier le type MIME pour js-cookie
		// Cela devrait permettre son chargement sans erreur de type MIME interdit
		jsxInject: `import 'js-cookie'`,
	},
});
