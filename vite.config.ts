import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && prerender({
      routes: [
        '/',
        '/paint-protection-film',
        '/ceramic-coating',
        '/ceramic-tint',
        '/color-change-wrap',
        '/colorppf',
        '/stealth-ppf',
        '/ppf-packages',
        '/marine',
        '/marine-ppf',
        '/marine-ceramic-coating',
        '/marine-ceramic-tint',
        '/thank-you',
      ],
      renderer: new PuppeteerRenderer({
        renderAfterTime: 5000,
      }),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
