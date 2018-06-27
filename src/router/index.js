import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import VuexTorial from '@/components/VuexTorial'
import MySlot from '@/components/Slot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/neko',
      name: 'VuexTorial',
      component: VuexTorial
    },
    {
      path: '/slot',
      name: 'MySlot',
      component: MySlot
    }
  ]
})