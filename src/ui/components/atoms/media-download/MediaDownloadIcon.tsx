import React from 'react';
import { IconButton } from './MediaDownloadIcon.style';
import type { MediaDownloadIconProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';
import iconSlideLeft from '../../../../assets/icons/left-white-arrow.svg?raw';
import iconDownload from '../../../../assets/icons/downloads.svg?raw';

const iconMap: Record<'slide-left' | 'download', string> = {
  'slide-left': iconSlideLeft,
  download: iconDownload,
};

function MediaDownloadIcon({ type, onClick }: MediaDownloadIconProps): JSX.Element {
  const iconSrc = iconMap[type];

  return (
    <IconButton aria-label={type} onClick={onClick}>
      <Icon src={iconSrc} />
    </IconButton>
  );
}

export default MediaDownloadIcon;
