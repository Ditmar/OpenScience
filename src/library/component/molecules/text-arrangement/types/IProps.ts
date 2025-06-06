import React from 'react';

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type LayoutType = 'featured' | 'columns' | 'cards' | 'standard';
export type AlignmentType = 'left' | 'center' | 'right' | 'justified';
export type SpacingType = 'default' | 'compact' | 'spacious';

export interface ContentType {
  title: string;
  text: string;
}

export interface IProps {
  titleSize?: SizeType;
  layout?: LayoutType;
  alignment?: AlignmentType;
  titleSpacing?: SpacingType;
  contentSpacing?: SpacingType;
  contentSize?: SizeType;
  showBadge?: boolean;
  content: ContentType;
  responsive?: boolean;
  className?: string;
  children?: React.ReactNode;
}
