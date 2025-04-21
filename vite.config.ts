import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@types": path.resolve(__dirname, "src/types/"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    globals: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/global.scss" as *;`,
      },
    },
  },
});
