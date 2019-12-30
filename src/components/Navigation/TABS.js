const TABS = [
  {
    name: 'Главная',
    link: '/',
  },
  {
    name: 'Блог',
    link: '/blog/',
  },
];

const ONLY_DEV_TABS = [
  {
    name: 'Проекты',
    link: '/projects/',
  },
  {
    name: 'Списки',
    link: '/lists/',
  },
];

const ALL_TABS = [...TABS, ...(process.env.IS_DEV ? ONLY_DEV_TABS : [])];

export default ALL_TABS;
