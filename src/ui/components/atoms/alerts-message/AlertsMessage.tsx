import styles from './AlertsMessage.module.scss';
import type { IProps } from './types/IProps';

function Alerts(props: IProps) {
  const { children, variant } = props;

  return (
    <div className={styles['label-alerts']}>
        <label htmlFor="label" className={`label ${variant ? `label--${variant}` : 'test'}`}>
          <span className={styles['alerts__text']}>This is a {children} alert--check it out!</span>
        </label>
    </div>
  );
}
export default Alerts;
