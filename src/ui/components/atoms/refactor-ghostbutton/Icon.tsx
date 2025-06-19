import React from 'react';
import { useDynamicIcon } from './useDynamic';
import type { IconProps } from './types/IProps';

export function Icon({
  iconName,
  width = 24,
  height = 24,
  fill = 'currentColor',
  className,
  'data-testid': testId,
}: IconProps) {
  const [SvgIcon, , loading] = useDynamicIcon(iconName);

  if (loading || !SvgIcon) return null;

  return (
    <SvgIcon width={width} height={height} fill={fill} className={className} data-testid={testId} />
  );
}
