import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue'
import SingleProjectView from './views/SingleProjectView.vue'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import NotFound from './views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      'path': '/',
      'name': 'home',
      'component': HomeView
    },
    {
      'path': '/project/:slug',
      'name': 'single-project',
      'component': SingleProjectView
    },
    {
      'path': '/about',
      'name': 'about',
      'component': AboutView
    },
    {
      'path': '/contacts',
      'name': 'contacts',
      'component': ContactView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export { router }