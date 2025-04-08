import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  return {
    base: "./",
    plugins: [vue()],
    // 打包配置
    build: {
      lib: {
        entry: "index.js", // 组件库入口文件
        name: "AntdVueColorPicker", // 打包后的库名称
        formats: ["es", "umd"], // 构建格式
        fileName: (format) => `antd-vue-color-picker.${format}.js`,
      },
      rollupOptions: {
        external: ["vue", "ant-design-vue"], // 外部依赖
        output: {
          globals: {
            vue: "Vue",
            "ant-design-vue": "antd",
          },
        },
      },
    },
  };
});
