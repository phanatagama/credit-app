/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
//@ts-ignore
import path from "path";

//@ts-ignore
const root = path.resolve(__dirname, "src")

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions,
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
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
