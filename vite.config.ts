import solid from "solid-start/vite";
import netlify from "solid-start-netlify";
import { defineConfig } from "vite";
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import path from 'path'


export default defineConfig({
  server: {
    strictPort: true
  },
  resolve:{
    alias:{
      'data' : path.resolve(__dirname, './data')
    },
  },
  plugins: [
    {
      ...mdx({
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
        remarkPlugins: [remarkGfm],
      }),
      enforce: 'pre',
    },
    solid({ adapter: netlify(), extensions: ['.md', '.mdx']})],
});
