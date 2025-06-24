import { useIdleLogout } from './useIdleLogout';
import styles from './IdleLogout.module.scss';

export default function IdleLogout() {
  const { showWarning, countdown } = useIdleLogout();

  return (
    showWarning && (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <p>⚠️ Vas a ser desconectado por inactividad en {countdown} segundos.</p>
        </div>
      </div>
    )
  );
}
