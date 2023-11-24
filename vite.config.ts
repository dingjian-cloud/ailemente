/// <reference types="vitest" />
import type { ConfigEnv, UserConfig } from 'vite';
import { loadEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default ({ command: _, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  console.log('env', env);
  return {
    root,
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    plugins: [vue(), vueJsx()],
    test: {
      globals: true,
      environment: 'jsdom',
      testTransformMode: {
        web: ['/.[tj]sx$/'],
      },
    },
  };
};
