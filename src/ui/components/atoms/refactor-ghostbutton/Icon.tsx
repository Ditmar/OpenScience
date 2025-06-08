import React from 'react';
import circleQuarters from '../../../../assets/icons/circle-quarters.svg?raw';

interface IconProps {
  size?: number;
  className?: string;
  'data-testid'?: string;
}

function Icon({ size = 24, className, 'data-testid': testId }: IconProps) {
  const svgCleaned = circleQuarters
    .replace(/fill="[^"]*"/g, 'fill="currentColor"')
    .replace(/(width|height)="[^"]*"/g, '');

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        width: `${String(size)}px`,
        height: `${String(size)}px`,
        verticalAlign: 'middle',
        lineHeight: 1,
      }}
      dangerouslySetInnerHTML={{ __html: svgCleaned }}
      data-testid={testId}
    />
  );
}

export default Icon;
