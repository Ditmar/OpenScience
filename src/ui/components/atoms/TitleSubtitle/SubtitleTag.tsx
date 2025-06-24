import React from 'react';
import type { SubtitleTagProps } from './types/SubtitleTagProps';

export function SubtitleTag({ tag, className, children }: SubtitleTagProps) {
  switch (tag) {
    case 'p':
      return <p className={className}>{children}</p>;
    case 'h3':
      return <h3 className={className}>{children}</h3>;
    case 'h4':
      return <h4 className={className}>{children}</h4>;
    case 'h5':
      return <h5 className={className}>{children}</h5>;
    case 'h6':
      return <h6 className={className}>{children}</h6>;
    default:
      return <p className={className}>{children}</p>;
  }
}
