import type { IProps } from './types/IProps';
import styles from './LabelRecentsArticles.module.scss';

function LabelRecentsArticles(props: IProps) {
  const { text, color = 'primary' } = props;
  const colorText = styles[`label-recents-articles--${color}`];

  return (
    <div className={`${styles['label-recents-articles']} ${colorText}`}>
      <span>{text}</span>
    </div>
  );
}

export default LabelRecentsArticles;
