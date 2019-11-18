## codemirror

基于 [vue-codemirror-lite](https://github.com/cnu4/vue-codemirror-lite) 拓展的组件

安装组件依赖
``` js
npm i  vue-codemirror-lite -S
```
main.js 按需引入 SchemaFormCodemirror 组件, 语言模式和主题

``` js
import SchemaFormCodemirror from '@vueblocks/element-schema-form/lib/SchemaFormCodemirror.common.min.js'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/night.css' // theme: night
import 'codemirror/mode/javascript/javascript.js' // mode: text/javascript

Vue.use(SchemaFormCodemirror)
```

<<< @/docs/.vuepress/components/expand-code-mirror.vue

查看 [CodeMirror Manual](https://codemirror.net/doc/manual.html#modloader) 了解更多配置和主题

## quill

基于 [vue2-editor](https://github.com/davidroyer/vue2-editor) 拓展的组件

安装组件依赖
``` js
npm i  vue2-editor -S
```
main.js 按需引入 SchemaFormQuill 组件

``` js
import SchemaFormQuill from '@vueblocks/element-schema-form/lib/SchemaFormQuill.common.min.js'

Vue.use(SchemaFormQuill)
```

使用
``` js
<template>
  <el-form label-position="top">
    <schema-form
      :model="model"
      :schema="schema"
    >
    </schema-form>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      model: {  quill: '<h4>一段文字</h4>' },
      schema: [
        [
         {
            type: 'quill',
            prop: 'quill',
            formItem: { label: '富文本编辑' },
            attrs: { 'editor-toolbar': [
              ['bold', 'italic', 'underline'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['code-block']]
            }
          }
        ]
      ]
    }
  }
}
</script>
```