import { Avatar as MUIAvatar } from '@mui/material';
import styles from './Avatar.module.scss';
import type { AvatarProps } from './types/IProps';

function Avatar({ src, alt = 'Avatar', variant = 'rounded', className }: AvatarProps) {
  const combinedClassName = `${styles.avatar} ${className ?? ''}`.trim();

  return <MUIAvatar src={src} alt={alt} variant={variant} className={combinedClassName} />;
}

export default Avatar;
