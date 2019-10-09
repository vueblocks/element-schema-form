import Vue from 'vue'

import 'normalize.css'
import './plugins/json-viewer'

import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import './theme/index.css'
// 引入codeMirror的样式
import 'codemirror/theme/cobalt.css'
import 'codemirror/mode/javascript/javascript.js'

import SchemaForm, { SchemaFormItem, SchemaFormJsoneditor, SchemaFormQuill, SchemaFormCodemirror } from '../src/index'

Vue.use(ElementUI, {
  size: 'small'
})
Vue.component('SchemaFormJsoneditor', SchemaFormJsoneditor)
Vue.component('SchemaFormQuill', SchemaFormQuill)

Vue.component('SchemaFormCodemirror', SchemaFormCodemirror)
Vue.component('SchemaFormItem', SchemaFormItem)

Vue.use(SchemaForm, {
  'codemirror': {
    cmOptions: {
      tabSize: 2,
      mode: 'text/javascript',
      theme: 'cobalt',
      lineNumbers: true,
      line: true
    }
  },
  input: {
    placeholder: '全局定义变量实验'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
