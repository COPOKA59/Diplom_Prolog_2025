import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/modules/core/pages/MainPage.vue';
import StoryCardsPage from '@/modules/works/pages/StoryCardsPage.vue';
import StoryPage from '@/modules/works/pages/StoryPage.vue';
import StoryChapterPage from '@/modules/works/pages/StoryChapterPage.vue';
import AdvancedSearchPage from '@/modules/core/pages/AdvancedSearchPage.vue';
import LoginPage from '@/modules/user/pages/LoginPage.vue';
import Profile from '@/modules/user/pages/Profile.vue';
import Settings from '@/modules/user/pages/Settings.vue';
import StoryHeader from '@/modules/works/pages/StoryHeader.vue';
import StoryStructure from '@/modules/works/pages/StoryStructure.vue';
import StoryCharacteristics from '@/modules/works/pages/StoryCharacteristics.vue';
import StoryContents from '@/modules/works/pages/StoryContents.vue';
import ChapterEditingPage from '@/modules/works/pages/ChapterEditingPage.vue';
import WorldPage from '@/modules/works/pages/WorldPage.vue';

const routes = [
  {
    /* --------| User |-------- */
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
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },

  /* --------| Works |-------- */
  {
    path: '/search',
    name: 'AdvancedSearchPage',
    component: AdvancedSearchPage,
  },
  {
    path: '/works',
    name: 'Stories',
    component: StoryCardsPage,
  },
  {
    path: '/works/:id',
    name: 'StoryPage',
    component: StoryPage,
    props: true,
  },
  {
    path: '/works/:id/chapter/:chapter_id',
    name: 'StoryChapterPage',
    component: StoryChapterPage,
    props: true,
  },
  {
    path: '/worlds',
    name: 'WorldPage',
    component: WorldPage,
  },

  /* --------| Editing Works |-------- */
  {
    path: '/editing',
    name: 'Editing',
    component: StoryHeader,
  },
  {
    path: '/editing/header',
    name: 'Editing Header',
    component: StoryHeader,
  },
  {
    path: '/editing/structure',
    name: 'Editing Structure',
    component: StoryStructure,
  },
  {
    path: '/editing/characteristics',
    name: 'Editing Characteristics',
    component: StoryCharacteristics,
  },
  {
    path: '/editing/contents',
    name: 'Editing Contents',
    component: StoryContents,
  },
  {
    path: '/editing/contents/chapter',
    name: 'Editing Chapter',
    component: ChapterEditingPage,
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
