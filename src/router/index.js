import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Content from '@/components/Content'
import Finished from '@/components/Finished'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Content',
      name: 'Content',
      component: Content
    },
    {
      path:'/Finished',
      name:'Finished',
      component:Finished
    }
  ]
})
