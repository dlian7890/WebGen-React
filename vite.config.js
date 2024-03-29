import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react()],
    server: {
        host: 'localhost',
        port: 3000,
    },
    optimizeDeps: {
        exclude: ['js-big-decimal'],
    },
});
