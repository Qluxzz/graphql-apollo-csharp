import { createRouter, createWebHistory } from 'vue-router'

import MovieDetails from '@/MovieDetails.vue'
import ActorDetails from '@/ActorDetails.vue'
import Home from '@/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/movie/:id/:name?',
      component: MovieDetails,
    },
    { path: '/actor/:id/:name?', component: ActorDetails },
  ],
})

export default router
