import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Technology from './pages/Technology.vue';
import Machines from './pages/Machines.vue';
import Company from './pages/Company.vue';
import Contact from './pages/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/technology', component: Technology },
  { path: '/machines', component: Machines },
  { path: '/company', component: Company },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
