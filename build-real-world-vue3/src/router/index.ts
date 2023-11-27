import { createRouter, createWebHistory } from 'vue-router';
import EventDetailView from '@/views/EventDetailView.vue';
import EventsListView from '@/views/EventsListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      props: route => ({ page: typeof route.query.page === 'string' ? parseInt(route.query.page ) : route.query.page || 1 }),
      component: EventsListView
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
