import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import postcssImport from 'postcss-import'
// import postcssNext from 'postcss-cssnext'
// import postcssNesting from 'postcss-nesting'
// import cssnano from 'cssnano'
// import autoPrefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // 'comps': path.resolve(__dirname, 'src/components'),
      'views': path.resolve(__dirname, 'src/views'),
      // 'stores': path.resolve(__dirname, 'src/store'),
      // 'routers': path.resolve(__dirname, 'scr/router'),
    },

  },
  // css:{
  //   postcss:{
  //     plugins:[
  //       // postcssImport,
  //       // postcssNext(),
  //       // postcssNesting(),
  //       // cssnano({
  //       //   preset: 'default',
  //       // }),
  //       autoPrefixer,
  //       // tailwindcss
  //     ]
  //   }
  // },
})
