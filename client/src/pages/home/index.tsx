import { MdHome } from 'react-icons/md';
import { Page } from '@/router/types';
import { lazy } from 'react';

export const HomePage: Page = {
  component: lazy(() => import('./page')),
  name: 'Home',
  path: 'home',
  icon: MdHome,
};
