// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import AppsView from '@/views/AppsView.vue';
import ShopView from '@/views/ShopView.vue';
import ContactView from '@/views/ContactView.vue';
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/apps',
    name: 'Apps',
    component: AppsView,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ShopView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicyView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
