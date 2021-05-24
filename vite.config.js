import { defineConfig } from "vite";
import vitePluginVuedoc, { vueDocFiles } from "vite-plugin-vuedoc";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vitePluginVuedoc({}), vue({ include: [...vueDocFiles] })],
  
});