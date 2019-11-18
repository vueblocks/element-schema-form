import SchemaForm  from '../../src/index.js'
import ElementUI from "element-ui"
import CustomNumber from './components/custom/custom-number.vue'

import "element-ui/lib/theme-chalk/index.css"
import '@vuepress/theme-default'


export default ({ Vue }) => {
  Vue.use(SchemaForm)
  Vue.use(ElementUI)
  // Vue.use(SchemaFormQuill)
  Vue.component('CustomNumber', CustomNumber)
}
