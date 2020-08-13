import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

export const episodeListRouteName = 'List'
export const aboutRouteName = 'About'

const routes = [
  {
    path: '/episodes',
    name: 'List',
    component: List
  },
  {
    path: '/episodes/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '*',
    redirect: { name: 'List' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
