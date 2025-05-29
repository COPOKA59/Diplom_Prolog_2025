import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/modules/core/pages/MainPage.vue';
import AdvancedSearchPage from '@/modules/core/pages/AdvancedSearchPage.vue';
import LoginPage from '@/modules/user/pages/LoginPage.vue';
import Profile from '@/modules/user/pages/Profile.vue';
import Settings from '@/modules/user/pages/Settings.vue';
import AuthorProfile from '@/modules/user/pages/AuthorProfile.vue';

import StoryCardsPage from '@/modules/works/pages/StoryCardsPage.vue';
import StoryPage from '@/modules/works/pages/StoryPage.vue';
import StoryChapterPage from '@/modules/works/pages/StoryChapterPage.vue';
import StoryHeader from '@/modules/works/pages/StoryHeader.vue';
import StoryStructure from '@/modules/works/pages/StoryStructure.vue';
import StoryCharacteristics from '@/modules/works/pages/StoryCharacteristics.vue';
import StoryWorld from '@/modules/works/pages/StoryWorld.vue';
import StoryCharacters from '@/modules/works/pages/StoryCharacters.vue';
import StoryContents from '@/modules/works/pages/StoryContents.vue';
import ChapterEditingPage from '@/modules/works/pages/ChapterEditingPage.vue';
import WorldbuildingPage from '@/modules/works/pages/WorldbuildingPage.vue';
import ItemsListPage from '@/modules/works/pages/ItemsListPage.vue';
import CollectionPage from '@/modules/works/pages/CollectionPage.vue';

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
  {
    path: '/user/profile',
    name: 'Author Profile',
    component: AuthorProfile,
  },
  {
    path: '/user/series',
    name: 'Author Series',
    component: AuthorProfile,
  },
  {
    path: '/user/works',
    name: 'Author Works',
    component: AuthorProfile,
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
    path: '/collections',
    name: 'Collection List Page',
    component: ItemsListPage,
    meta: { itemData: {
        title: 'Сборники',
        pageName: 'CollectionPage'
    } }
  },
  {
    path: '/collections/:id',
    name: 'CollectionPage',
    component: CollectionPage,
    props: true,
  },

  {
    path: '/worlds',
    name: 'World List Page',
    component: ItemsListPage,
    meta: { itemData: {
        title: 'Миры',
        pageName: 'WorldPage'
    } }
  },
  {
    path: '/worlds/:id',
    name: 'WorldPage',
    component: WorldbuildingPage,
    meta: { formType: 'world' },
    props: true,
  },

  {
    path: '/characters',
    name: 'Character List Page',
    component: ItemsListPage,
    meta: { itemData: {
        title: 'Персонажи',
        pageName: 'CharacterPage'
    } }
  },
  {
    path: '/characters/:id',
    name: 'CharacterPage',
    component: WorldbuildingPage,
    meta: { formType: 'character' },
    props: true,
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
    path: '/editing/world',
    name: 'Editing World',
    component: StoryWorld,
  },
  {
    path: '/editing/characters',
    name: 'Editing Characters',
    component: StoryCharacters,
  },
  {
    path: '/editing/contents',
    name: 'Editing Contents',
    component: StoryContents,
  },
  {
    path: '/editing/contents/chapter/:id',
    name: 'Editing Chapter',
    component: ChapterEditingPage,
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
