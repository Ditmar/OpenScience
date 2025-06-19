import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  iconName: IconName;
  ['data-testid']?: string;
}

export type IconName =
  | 'article'
  | 'circle-quarters'
  | 'home'
  | 'facebook'
  | 'downloads'
  | 'logo'
  | 'start'
  | 'volume';
