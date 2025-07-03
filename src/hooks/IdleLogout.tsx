// src/components/system/IdleLogout.tsx
import { useIdleLogout } from './useIdleLogout';
import styles from './IdleLogout.module.scss';

interface IdleLogoutProps {
  idleTimeout: number;
  warningDuration: number;
}

export default function IdleLogout({ idleTimeout, warningDuration }: IdleLogoutProps) {
  const { showWarning, countdown } = useIdleLogout({ idleTimeout, warningDuration });

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
