import React from 'react';
import type { SubtitleTagProps } from './types/SubtitleTagProps';

export function SubtitleTag({ tag, className, children }: SubtitleTagProps) {
  const validTags = ['p', 'h3', 'h4', 'h5', 'h6'] as const;

  const Tag = validTags.includes(tag) ? tag : 'p';

  return React.createElement(Tag, { className }, children);
}
