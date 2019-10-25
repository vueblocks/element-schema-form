---
{
  "title": "SchemaForm",
}
---

## SchemaForm

**SchemaForm**

### 组件使用

```vue
<template>
  <el-form size="small" label-position="left" label-width="80px" :model="module">
    <schema-form
      :layout="layout"
      :module="module"
      :schema="schema"
      :options="options"
    >
    </schema-form>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      // 表单布局
      layout: {},
      // 表单绑定模型
      module: {},
      // 表单 schema
      schema: [],
      // 表单 options
      options: {}
    }
  }
}
</script>
```

### Props

#### layout

#### model

#### schema

#### options