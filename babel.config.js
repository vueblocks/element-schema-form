const plugins = [
  'lodash',
  [
    'component',
    {
      'libraryName': 'element-ui',
      'styleLibraryName': '~theme'
    }
  ]
]

// 生产模式使用 transform-remove-console 插件
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins
}
