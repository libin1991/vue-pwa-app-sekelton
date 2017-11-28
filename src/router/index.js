import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Settings from '@/components/Settings'
import Playground from '@/components/Flex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Index',
      component: Index
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },

    {
      path: '/playground',
      name: 'Playground',
      component: Playground
    }
  ]
})
