import SchemaForm  from '../../src/index.js'
import ElementUI from "element-ui"
import CustomNumber from './components/custom/custom-number.vue'

import SchemaFormCodemirror  from '../../src/packages/components/schema-form-codemirror/index.js'


import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/night.css'
import 'codemirror/mode/javascript/javascript.js'

import "element-ui/lib/theme-chalk/index.css"
import '@vuepress/theme-default'

export default ({ Vue }) => {
  Vue.use(SchemaForm)
  Vue.use(ElementUI)
  Vue.use(SchemaFormCodemirror)
  // Vue.use(SchemaFormQuill)
  Vue.component('CustomNumber', CustomNumber)
}
