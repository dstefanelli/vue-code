import { createRouter, createWebHistory } from 'vue-router';
import EventLayout from '@/views/event/EventLayout.vue'
import EventDetail from '@/views/event/EventDetail.vue'
import EventRegister from '@/views/event/EventRegister.vue'
import EventEdit from '@/views/event/EventEdit.vue'
import EventsListView from '@/views/EventsListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      props: (route) => ({
        page:
          typeof route.query.page === 'string' ? parseInt(route.query.page) : route.query.page || 1
      }),
      component: EventsListView
    },
    {
      path: '/event/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'EventDetail',
          component: EventDetail
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: EventEdit
        }
      ]
    },
    {
      path: '/events/:afterEvent(.*)', // Redirect with childrens
      redirect: (to) => { 
        return { path: '/event/' + to.params.afterEvent }
      }
    },
    {
      path: '/about-us',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/about', // In case of static redirections
      redirect: { name: 'about' }
    }
  ]
})

export default router
