/*
 * @Author: fengjiqiang
 * @Date: 2024-07-19 15:31:08
 * @LastEditors: fengjiqiang
 * @LastEditTime: 2024-07-19 15:32:00
 * @FilePath: \antd-color-picker\vite.config.js
 * @Description: 
 */
import { defineConfig } from "vite"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  return {
    base: "./",
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    // 打包配置
    build: {
      lib: {
        entry: "src/index.js", // 组件库入口文件
        name: "AntdVueColorPicker", // 打包后的库名称
        fileName: "antd-vue-color-picker", // 输出文件名
        formats: ["es", "umd"], // 构建格式
      },
      rollupOptions: {
        // 静态资源合并打包
        // https://www.rollupjs.com/guide/big-list-of-options#outputassetfilenames
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash][extname]",
        },
      },
    },
  };
})
