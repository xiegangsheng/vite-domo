import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
// import Icons from 'unplugin-icons/vite';
// import IconsResolver from 'unplugin-icons/resolver';
// import DefineOptions from 'unplugin-vue-define-options/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
//setup语法糖之简化name
import vueSetupExtend from 'vite-plugin-vue-setup-extend';

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
        vueSetupExtend(),
        // DefineOptions(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            // 后续vue/vue-router/pinia的API都不需要再单独import到setup里面了
            imports: ['vue', 'vue-router', 'pinia'],
            eslintrc: {
                enabled: false, // 若没此json文件，先开启，生成后在关闭
                filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
                globalsPropValue: true
            },
            //dts: 'src/auto-imports...', // 可以自定义文件生成的位置与是否生成，默认是根目录下
            dts: './auto-import.d.ts'
        }),
        Components({
            dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
            resolvers: [ElementPlusResolver()]
            // resolvers: [IconsResolver(), ElementPlusResolver()]
        })
        // Icons({
        //     compiler: 'vue3',
        //     autoInstall: true
        // })
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
