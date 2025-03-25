import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import StoryCardsPage from '@/pages/StoryCardsPage.vue';
import StoryPage from '@/pages/StoryPage.vue';
import StoryChapterPage from '@/pages/StoryChapterPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage,
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
];

const router = createRouter({
  history: createWebHistory(), //createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
