import { createRouter, createWebHistory } from 'vue-router';
import { MainPage, AdvancedSearchPage } from '@/modules/core/pages';
import { LoginPage, Profile, Settings, AuthorProfile, AuthorSeries, AuthorStories } from '@/modules/user/pages';
import { StoryCardsPage, StoryPage, StoryChapterPage, StoryHeader, StoryStructure,
  StoryCharacteristics, StoryWorld, StoryCharacters, StoryContents, ChapterEditingPage,
  WorldbuildingPage, ItemsListPage, CollectionPage, SeriesStoriesPage } from '@/modules/works/pages';

import { useUserStore } from '@/stores/user';

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
    path: '/user',
    redirect: '/user/profile'
  },
  {
    path: '/user/series',
    name: 'Author Series',
    component: AuthorSeries,
    props: false
  },
  {
    // path: '/series/:id',
    path: '/series/:itemId',
    name: 'Series',
    component: SeriesStoriesPage,
    props: true
  },
  {
    path: '/user/works',
    name: 'Author Works',
    component: AuthorStories,
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
    path: '/collections/:itemId',
    // path: '/collections/:id',
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
    path: '/worlds/:itemId',
    // path: '/worlds/:id',
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
    path: '/characters/:itemId',
    // path: '/characters/:id',
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
    path: '/editing/:workId/header',
    name: 'Editing Header',
    component: StoryHeader,
    props: true,
  },
  {
    path: '/editing/:workId/structure',
    name: 'Editing Structure',
    component: StoryStructure,
    props: true,
  },
  {
    path: '/editing/:workId/characteristics',
    name: 'Editing Characteristics',
    component: StoryCharacteristics,
    props: true,
  },
  {
    path: '/editing/:workId/world',
    name: 'Editing World',
    component: StoryWorld,
    props: true,
  },
  {
    path: '/editing/:workId/characters',
    name: 'Editing Characters',
    component: StoryCharacters,
    props: true,
  },
  {
    path: '/editing/:workId/contents',
    name: 'Editing Contents',
    component: StoryContents,
    props: true,
  },
  {
    path: '/editing/:workId/contents/chapter/:itemId',
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

router.beforeEach(async (to) => {
  const userStore = useUserStore();
  // await userStore.fetchCurrentUser();
  const privatePages = [ 'Profile', 'Settings', 'Collection List Page', 'CollectionPage',
    'World List Page', 'WorldPage', 'Character List Page', 'CharacterPage', 
    'Editing Header', 'Editing Structure', 'Editing Characteristics', 'Editing World', 
    'Editing Characters', 'Editing Contents', 'Editing Chapter' ];
  const authRequired = privatePages.includes(to.name);

  // if (authRequired && !userStore.user)
  if (authRequired && !userStore.isAuthenticated) {
      return { name: 'LoginPage' };
  }
});

export default router;
