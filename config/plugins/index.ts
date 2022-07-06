import type { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { ConfigSvgLoaderPlugin } from "./svgLoader";

function createVitePlugin() {
  const vitePlugins = [vue(), vueJsx(), ConfigSvgLoaderPlugin()];

  return vitePlugins;
}

export default createVitePlugin;
