import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import postcssPxToViewport from "postcss-px-to-viewport-8-plugin";
import tailwindcss from "tailwindcss";
import AutoImport from "unplugin-auto-import/vite";

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      imports: ["react", "react-router-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@imgs": path.resolve(__dirname, "src/assets/images"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // additionalData: `@import "${path.resolve(__dirname, 'src/theme.module.less')}";`,
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [
        tailwindcss,
        postcssPxToViewport({
          viewportWidth: 375,
          viewportHeight: 667,
          unitPrecision: 5,
          viewportUnit: "vw",
          selectorBlackList: ["ignore"],
          minPixelValue: 1,
          mediaQuery: false,
        }),
      ],
    },
  },
});
