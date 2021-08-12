import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Curation from '../views/Curation.vue'
import Category from '../views/Categories/Category.vue'
import Random from '../views/Random/Random.vue'
import Source from '../views/Sources/Source.vue'
import EventDetail from '../views/Events/EventDetails.vue'
import NotFound from '../components/NotFound.vue'
import Sitemap from '../components/Sitemap.vue'
import Search from '../views/Search.vue'


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
    path: '/curation',
    name: 'Curation',
    component: Curation
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    component: EventDetail,
    props: true
  },
  {
    path: '/sitemap',
    name: 'Sitemap',
    component: Sitemap
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
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
