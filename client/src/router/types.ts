import { FC, LazyExoticComponent } from 'react';

import { IconType } from 'react-icons/lib';

export type Page = {
  component: LazyExoticComponent<FC>;
  path: string;
  name: string;
  icon: IconType;
  default?: boolean;
};
