module.exports = {
  title: 'Element Schema Form',
  description: '基于 JSON Schema 构建 Element 表单，表单页面开发从未如此高效',
  base: '/element-schema-form/',
  port: 5454,
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/guide/component/SchemaForm/' },
      {
        text: '表单设计器',
        link: 'https://vueblocks.github.io/element-form-generator/'
      },
      {
        text: 've-charts',
        link: 'https://github.com/vueblocks/ve-charts'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/vueblocks/element-schema-form'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '',
            '快速开始',
            '更新日志',
            '在线示例',
          ]
        },
        {
          title: '组件',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/guide/component/SchemaForm',
            ['/guide/component/schema', 'schema 详解'],
            ['/guide/component/layout', 'layout 布局'],
            ['/guide/component/slot', 'slot 插槽'],
            ['/guide/component/dynamic', 'dynamicAttrs 动态属性'],
            ['/guide/component/custom', '自定义组件']
          ]
        }
      ]
    }
  }
}