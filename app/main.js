import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import SchemaForm from '../src/index'
import FormSwitch from './components/form-switch/index.vue'

Vue.component('FormSwitch', FormSwitch)

Vue.use(ElementUI)
Vue.use(SchemaForm)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
