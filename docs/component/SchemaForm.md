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
      layout: {'gutter':16,'justify':'start'},
      // 表单绑定模型
      module: {'default_1':'','default_2':''},
      // 表单 schema
      schema: [[{'type':'select','prop':'default_2','formItem':{'label':'label:'},'colGrid':{'span':12}},{'type':'input','prop':'default_1','formItem':{'label':'label:'},'colGrid':{'span':12}}]],
      // 表单 options
      options: {'default_2':[{'label':'选择A','value':'A'},{'label':'选择B','value':'B'}]}
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