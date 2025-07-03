// src/hooks/useIdleLogout.ts
import { useEffect, useRef, useState } from 'react';

interface IdleLogoutOptions {
  idleTimeout: number;
  warningDuration: number;
}

export function useIdleLogout({ idleTimeout, warningDuration }: IdleLogoutOptions) {
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(warningDuration / 1000);

  const idleTimer = useRef<number>();
  const warningTimer = useRef<number>();
  const intervalRef = useRef<number>();

  useEffect(() => {
    const logout = () => {
      window.location.replace('/login');
    };

    const startWarning = () => {
      setShowWarning(true);
      setCountdown(warningDuration / 1000);

      intervalRef.current = window.setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      warningTimer.current = window.setTimeout(logout, warningDuration);
    };

    const resetTimers = () => {
      clearTimeout(idleTimer.current);
      clearTimeout(warningTimer.current);
      clearInterval(intervalRef.current);
      setShowWarning(false);
      setCountdown(warningDuration / 1000);
      idleTimer.current = window.setTimeout(startWarning, idleTimeout);
    };

    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    events.forEach((event) => {
      window.addEventListener(event, resetTimers);
    });
    resetTimers();

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, resetTimers);
      });
      clearTimeout(idleTimer.current);
      clearTimeout(warningTimer.current);
      clearInterval(intervalRef.current);
    };
  }, [idleTimeout, warningDuration]);

  return { showWarning, countdown };
}
