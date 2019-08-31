import Vue from 'vue'

import 'normalize.css'

import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import SchemaForm from '../src/index'

Vue.use(ElementUI, {
  size: 'small'
})
Vue.use(SchemaForm)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
