import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/test-common'
    },
    {
      path: '/test-common',
      component: () => import('@/views/test-common/index.vue')
    },
    {
      path: '/test-extend',
      component: () => import('@/views/test-extend/index.vue')
    }
  ]
})
