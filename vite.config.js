import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        open: true,
        // redirects all unknown routes (like /Tasks) to index.html
        fs: {
            strict: false,
        },
        historyApiFallback: true,
    }
});
