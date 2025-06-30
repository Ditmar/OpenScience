import React from 'react';
import type { TitleTagProps } from './types/TitleTagProps';

export function TitleTag({ tag, className, children }: TitleTagProps) {
  const validTags = ['h1', 'h2', 'h3', 'h4', 'h5'] as const;

  const Tag = validTags.includes(tag) ? tag : 'h2';

  return React.createElement(Tag, { className }, children);
}
