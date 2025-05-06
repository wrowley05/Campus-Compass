import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: 'https://wrowley05.github.io/',
    plugins: [plugin()],

})