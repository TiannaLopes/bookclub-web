// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import AppsView from '@/views/AppsView.vue';
import ContactView from '@/views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/apps',
    name: 'Apps',
    component: AppsView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
