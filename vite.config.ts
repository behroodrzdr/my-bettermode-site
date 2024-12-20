import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "tailwindcss";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default () => {
  return defineConfig({
    server: {
      port: 3000,
    },
    envDir: "./env",
    plugins: [react(), tsconfigPaths()],
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    resolve: {
      // Reference: https://dev.to/tilly/aliasing-in-vite-w-typescript-1lfo
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@graphql": path.resolve(__dirname, "./src/graphql"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@test": path.resolve(__dirname, "./src/test"),
        "@types": path.resolve(__dirname, "./src/types"),
      },
    },
  });
};
