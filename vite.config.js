import { defineConfig } from "vite";
import vitePluginVuedoc, { vueDocFiles } from "vite-plugin-vuedoc";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vitePluginVuedoc({ wrapperClass: "markdown-body" }),
    vue({ include: [...vueDocFiles] }),
  ],
});
