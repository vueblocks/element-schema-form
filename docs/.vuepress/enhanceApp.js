
import SchemaForm  from '../../src/index.js'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import '@vuepress/theme-default'

export default ({ Vue }) => {
    Vue.use(SchemaForm)
    Vue.use(ElementUI)
}
  