import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

export default {
  build: {
    target: 'modules',
    outDir: 'dist',
    emptyOutDir: false,
    sourcemap: true,
    minify: false,
    brotliSize: false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: [
        {
          // 打包格式
          format: 'es',
          // 打包后文件名
          entryFileNames: '[name].mjs',
          // 让打包目录和我们目录对应
          // preserveModules: true,
          exports: 'named',
          // 配置打包根目录
          dir: './dist/es',
        },
        {
          // 打包格式
          format: 'cjs',
          // 打包后文件名
          entryFileNames: '[name].js',
          // 让打包目录和我们目录对应
          // preserveModules: true,
          exports: 'named',
          // 配置打包根目录
          dir: './dist/lib',
        },
      ],
    },
  },

  plugins: [
    vue(),
    Components({
      dts: true,
    }),
  ],
}
