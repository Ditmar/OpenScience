import styles from './PrimaryButtons.module.scss';
import type { IProps } from './types/IProps';

function PrimaryButtons(props: IProps) {
  const { children, variant, onClick } = props;
  const buttonClass = `${styles['buttons-primary__button']} ${
    styles[`buttons-primary__button--${variant}`]
  }`;
  const labelClass = styles['buttons-primary__label'];

  console.log('Button class:', buttonClass);
  console.log('Label class:', labelClass);
  return (
    <div>
      <button className={buttonClass} onClick={onClick}>
        <span className={labelClass}>{children}</span>
      </button>
    </div>
  );
}
export default PrimaryButtons;
