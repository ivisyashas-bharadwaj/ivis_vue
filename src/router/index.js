import PageContent from "@/views/PageContent.vue";
import SolutionsPage from "@/views/solutionsPage.vue";
import OurTeam from "@/views/OurTeam.vue";
import AboutUs from "@/views/AboutUs.vue";
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from "@/components/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageContent, 
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: SolutionsPage, 
  },
  {
    path: '/ourteam',
    name: 'ourteam',
    component: OurTeam, 
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUs, 
  },
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }

  // Add other routes here if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});



export default router;