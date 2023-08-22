import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import dns from 'dns';
import legacy from '@vitejs/plugin-legacy';

dns.setDefaultResultOrder('verbatim');

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      checker({
        typescript: true,
      }),
      legacy({
        modernPolyfills: true,
        renderLegacyChunks: false,
      }),
    ],
    envPrefix: 'REACT_APP_',
    server: {
      open: true,
      port: process.env.VITE_PORT,
    },
    build: {
      outDir: './build',
      sourcemap: true
    },
  });
};
