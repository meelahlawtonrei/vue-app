import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

import Feature1 from '../views/Feature1.vue'
import Feature2 from '../views/Feature2.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  { 
    path: '/feature1',
    name: 'Feature1',
    component: Feature1
  },

  {
    path: '/feature2',
    name: 'Feature2',
    component: Feature2
  }
]



const router = new VueRouter({
  routes
})

export default router
