import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

import reactRefresh from '@vitejs/plugin-react-refresh';
import viteEslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        reactRefresh(),
        viteEslint({
            failOnError: false,
        }),
    ],
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                // 支持内联 JavaScript
                javascriptEnabled: true,
                // 重写 less 变量，定制样式
                modifyVars: {
                    hack: `true; @import (reference) "${resolve('src/styles/theme.less')}";`,
                },
            },
        },
    },
});
