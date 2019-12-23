---
{
  "title": "快速开始",
}
---

## 安装

```bash
npm i @vueblocks/element-schema-form -S
```

or

```bash
yarn add @vueblocks/element-schema-form
```

## 引入组件

完整引入

```js
import SchemaForm from '@vueblocks/element-schema-form'

Vue.use(SchemaForm)
```

## 引入第三方扩展

`SchemaForm` 支持一些用于表单渲染的高级组件

例如 `codemirror`，使用前需要安装组件依赖

```bash
npm i codemirror vue-codemirror-lite -S
```

按需引入 `SchemaFormCodemirror` 组件

```js
import SchemaFormCodemirror from '@vueblocks/element-schema-form/lib/SchemaFormCodemirror.common.min'

Vue.component('SchemaFormCodemirror', SchemaFormCodemirror)
```

## 组件预设配置

```js
// input 输入框 placeholder 预设
Vue.use(SchemaForm, {
  input: {
    placeholder: '全局定义变量实验'
  }
})

// codemirror 插件配置项预设
Vue.use(SchemaForm, {
  'codemirror': {
    cmOptions: {
      tabSize: 2,
      mode: 'text/javascript',
      theme: 'cobalt',
      lineNumbers: true,
      line: true
    }
  }
})
```
