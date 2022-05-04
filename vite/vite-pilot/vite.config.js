import {defaultConfig} from "vite";
import react from "vite-react-preset";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins : [react(), svgr()],
})

// https://vitejs.dev/config/