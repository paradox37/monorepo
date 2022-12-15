import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      envCompatible(),
      tsconfigPaths(),
      checker({
        typescript: true,
      }),
    ],
    envPrefix: 'REACT_APP_',
    server: {
      open: true,
      port: process.env.VITE_PORT,
    },
    build: {
      outDir: './build'
    },
  });
};
