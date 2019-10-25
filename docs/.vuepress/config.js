module.exports = {
  title: 'Element Form Generator',
  description: '基于 Element 的表单设计器，表单开发利器。',
  base: '/docs/',
  port: 5454,
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/component/' },
      { text: '表单设计器', link: '/form-generator/' },
      {
        text: 've-charts',
        link: 'https://github.com/vueblocks/ve-charts'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/vueblocks/element-form-generator'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          children: [
            '/guide/',
            '/guide/快速开始',
            '/guide/更新日志',
            '/guide/在线示例',
          ]
        }
      ],
      '/component/': [
        {
          title: '组件',
          children: [
            '/component/SchemaForm',
            '/component/SchemaFormItem'
          ]
        }
      ]
    }
  },
}