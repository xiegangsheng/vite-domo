import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                charset: false,
                javascriptEnabled: true,
                additionalData: '@import "./src/styles/main.scss";'
            }
        }
    },
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    server: {
        port: 8080, //启动端口
        hmr: {
            host: 'localhost',
            port: 8080
        },
        // 设置代理
        proxy: {
            '/webapi': {
                target: 'https://beta.laihua.com/webapi',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/webapi/, '')
            }
        }
    },
    build: {
        outDir: 'dist', // 打包后的文件名称,
        target: 'es2015',
        // assetsDir: 'assets',
        terserOptions: {
            // 生产环境下移除console
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    }
});