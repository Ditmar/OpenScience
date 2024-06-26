import styles from './LabelReferences.module.scss';
import type { IProps } from './types/IProps';

function LabelReferences({ text = 'Referencias', colorVariant = 'primary' }: IProps) {
  const getColorClassName = () => {
    return colorVariant === 'main'
      ? styles['label-references--main']
      : styles['label-references--primary'];
  };

  return (
    <div className={`${styles['label-references']} ${getColorClassName()}`}>
      <span className={styles['label-references__text']}>{text}</span>
    </div>
  );
}

export default LabelReferences;
