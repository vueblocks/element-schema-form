const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const isLib = process.env.VUE_APP_BUILD_MODE === 'lib'
const resolve = dir => path.join(__dirname, dir)

const setChainWebpack = config => {
  // 修改默认目录简写
  config.resolve.alias
    .set('@', path.resolve('app'))
  // 添加对 app 目录的支持
  config.module
    .rule('js')
    .include
    .add('/app')
    .end()
    .use('babel')
    .loader('babel-loader')
  if (isProd) {
    /**
     * 清除性能警告
     * entrypoint size limit (244 KiB)
     * asset size limit (244 KiB)
     */
    config.performance
      .set('maxEntrypointSize', 2500000)
      .set('maxAssetSize', 2000000)
    // 压缩代码
    config.optimization.minimize(true)
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  }
}

const setConfigureWebpack = config => {
  const externalLibs = [
    'vue',
    'codemirror',
    'jsoneditor',
    'vue-codemirror-lite',
    'vue2-editor'
  ]
  // 将 vue 设置为外部依赖
  let externals = [
    function (context, request, callback) {
      for (const lib of externalLibs) {
        const reg = new RegExp(`^${lib}`)
        if (reg.test(request)) {
          return callback(null, lib)
        }
      }
      callback()
    }
  ]
  return isLib ? {
    externals
  } : {}
}

module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: resolve('app/main.js') // 修改默认打包文件入口
    }
  },
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => setChainWebpack(config),
  configureWebpack: config => setConfigureWebpack(config),
  css: {
    extract: false
  },
  devServer: {
    port: 4545,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
