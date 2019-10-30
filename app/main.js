import Vue from 'vue'

import 'normalize.css'

import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import SchemaForm, { SchemaFormItem } from '../src/index'
import SchemaFormJsoneditor from '../src/packages/components/schema-form-jsoneditor'
import SchemaFormQuill from '../src/packages/components/schema-form-quill'
import SchemaFormCodemirror from '../src/packages/components/schema-form-codemirror'
// 引入codeMirror的样式
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/cobalt.css'
import 'codemirror/mode/javascript/javascript.js'
// 引入jsoneditor的样式
import 'jsoneditor/dist/jsoneditor.min.css'

import App from './App.vue'

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
  render: h => h(App)
}).$mount('#app')
