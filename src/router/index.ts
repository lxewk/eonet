import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Categories/Category.vue'
import Random from '../views/Random.vue'
import Source from '../views/Sources/Source.vue'
import EventDetail from '../views/Events/EventDetails.vue'
import NotFound from '../components/NotFound.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '/source',
    name: 'Source',
    component: Source
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    component: EventDetail,
    props: true
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
