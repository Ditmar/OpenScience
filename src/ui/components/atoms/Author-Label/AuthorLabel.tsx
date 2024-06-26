import styles from './AuthorLabel.module.scss';
import type { IProps } from './types/IProps';

function AuthorLabel({ variant }: IProps) {
  const variantClass = styles[variant as keyof typeof styles];

  return <p className={`${styles.author} ${variantClass}`}>{variant}</p>;
}

export default AuthorLabel;
