import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/modules/core/pages/MainPage.vue';
import StoryCardsPage from '@/modules/works/pages/StoryCardsPage.vue';
import StoryPage from '@/modules/works/pages/StoryPage.vue';
import StoryChapterPage from '@/modules/works/pages/StoryChapterPage.vue';
import AdvancedSearchPage from '@/modules/core/pages/AdvancedSearchPage.vue';
import LoginPage from '@/modules/user/pages/LoginPage.vue';
import Profile from '@/modules/user/pages/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/stories',
    name: 'Stories',
    component: StoryCardsPage,
  },
  {
    path: '/stories/:id',
    name: 'StoryPage',
    component: StoryPage,
    props: true,
  },
  {
    path: '/stories/:id/chapter/:chapter_id',
    name: 'StoryChapterPage',
    component: StoryChapterPage,
    props: true,
  },
  {
    path: '/search',
    name: 'AdvancedSearchPage',
    component: AdvancedSearchPage,
  },
];

const router = createRouter({
  history: createWebHistory(), //createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
