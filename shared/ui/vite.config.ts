import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import viteTsConfigPaths from 'vite-tsconfig-paths';
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteTsConfigPaths(),
        dts({
            include: ['src'],
            insertTypesEntry: true,
            outDir: 'dist',
            tsconfigPath: './tsconfig.web.json',
            entryRoot: 'src',
        }),
        svgr(),
        tailwindcss(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'web/index.ts'),
            name: 'ui',
            fileName: (format) => `ui.${format}.js`, // modern browser(esm format), legacy browser(umd format)
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
