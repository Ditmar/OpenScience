import styles from './PublishButton.module.scss';
import type { IProps } from './types/IProps';

function PublishButton(props: IProps) {
  const { children, variant, onClick } = props;
  return (
    <div className={styles['button-publish']}>
      <button
        className={`${styles['button-publish__button']} ${
          styles[`button-publish__button--${variant}`]
        }`}
        onClick={onClick}
      >
        <span className={styles['button-publish__label']}>{children}</span>
      </button>
    </div>
  );
}
export default PublishButton;
