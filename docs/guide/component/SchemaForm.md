---
{
  "title": "SchemaForm",
}
---


## 组件使用

```vue
<template>
  <el-form size="small" label-position="left" label-width="80px" :model="model">
    <schema-form
      :layout="layout"
      :model="model"
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
      model: {},
      // 表单 schema
      schema: [],
      // 表单 options
      options: {}
    }
  }
}
</script>
```

## Props

### layout

#### 表单布局信息，详见 [layout布局](layout.html)


### model

#### 表单数据对象,表单绑定值的集合,例如
``` js
{
  model: {
    name: '',
    age: ''
  }
}
```

### schema
#### 表单模板，用于表单的构建。详情见 [schema 详解](schema.html)

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
prop|数据字段|string|-|-
type|组件类型|string|-|-
formItem|表单属性|object|-|-
modifier|修饰符|string|number,trim|-
attrs|组件属性|object|-|-
dynamicAttrs|组件动态属性| object|-|-
on|组件事件|object|-|-
hide|是否隐藏|boolean|-|false
colGrid|栅格布局,与el-col属性相同|object|-|-

### options

#### 表单可选数据源，如我们常用的 el-select 的数据源
``` js
{
  options: {
    foods: [
      {
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }]
  }
}
```