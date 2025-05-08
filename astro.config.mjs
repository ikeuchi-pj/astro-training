import { defineConfig } from 'astro/config';
import relativeLinks from 'astro-relative-links';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import astrobook from 'astrobook';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'ignore',
  output: 'static',
  compressHTML: true,
  scopedStyleStrategy: 'attribute',
  integrations: [
    relativeLinks(),
    // astrobook({ 
    //   directory: 'src/components/stories/', // ストーリーを管理するディレクトリを指定。
    //   subpath: '/docs/', //docs配下でStorybookの画面を確認できる。
    //   head: './src/components/stories/CustomHead.astro', // Storybook内でglobalなスタイルを適用するために必要。
    // }), //Storybookを使いたい場合はコメントアウト解除。
  ],
  vite: {
    plugins: [
      sassGlobImports(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      format: 'directory',
      rollupOptions: {
        output: {
          // js
          entryFileNames: 'assets/js/app.js',
          assetFileNames: (assetInfo) => { 
            // css           
            if (/css/i.test(assetInfo.name.split('.').at(-1))) {
              return 'assets/css/style.css';
            }
            // images
            if (/jpg|png|svg|gif|webp/i.test(assetInfo.name.split('.').at(-1))) {
              return 'assets/images/[name][extname]';
            }

            // その他のファイルは assets/拡張子/ファイル名.拡張子 の形式で出力
            return 'assets/[ext]/[name][extname]';
          },
        },
        external: ['src/**/*.stories.*'],
      },
    },
  },
});
