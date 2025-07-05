import { IconButton } from './MediaDownloadIcon.style';
import type { MediaDownloadIconProps } from './types/IProps';

import SlideLeftIcon from '../../../../assets/icons/left-white-arrow.svg?url';
import DownloadIcon from '../../../../assets/icons/downloads.svg?url';

const iconMap: Record<MediaDownloadIconProps['type'], string> = {
  'slide-left': SlideLeftIcon,
  download: DownloadIcon,
};

function MediaDownloadIcon({ type, onClick }: MediaDownloadIconProps) {
  return (
    <IconButton onClick={onClick} aria-label={type}>
      <img src={iconMap[type]} alt="" role="presentation" />
    </IconButton>
  );
}

export default MediaDownloadIcon;
