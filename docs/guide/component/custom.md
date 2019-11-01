### 自定义组件

#### 定义组件
``` js
<template>
   <el-input-number 
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
  ></el-input-number>
</template>

<script>
import { FormMixin } from '@vueblocks/element-schema-form'
export default {
  name: 'CustomNumber',
  mixins: [FormMixin]
}
</script>
```

#### main.js 全局引入组件
``` js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SchemaForm from '@vueblocks/element-schema-form'
import CustomNumber from '@/components/custom-number.vue'

Vue.use(ElementUI)
Vue.use(SchemaForm)
Vue.component('CustomNumber', CustomNumber)
```

#### 使用自定义组件

<code-contain compName="CustomInput" link="https://codesandbox.io/s/zidingyizujian-qk1h8?fontsize=14">  
<<< @/docs/.vuepress/components/custom-input.vue
</code-contain>