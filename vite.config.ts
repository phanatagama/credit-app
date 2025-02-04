import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    // alias: [
    //   {
    //     find: "@",
    //     replacement: fileURLToPath(new URL("./src", import.meta.url)),
    //   },
    //   {
    //     find: "@components",
    //     replacement: fileURLToPath(
    //       new URL("./src/components", import.meta.url)
    //     ),
    //   },
    // ],
    // alias: {
    //   "@": path.resolve(__dirname, "./src"),
    //   "@components": path.resolve(__dirname, "./src/components"),
    // },
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
