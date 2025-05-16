import { useEffect, useState } from 'react';
import type { IconName } from '../vite-svgr/types/IProps';
import type { DynamicIcon } from '../vite-svgr/types/IconType';
import { loadSvgIcon } from '../vite-svgr/loadSvgIcon';

export function useDynamicIcon(iconName: IconName) {
  const [IconComponent, setIconComponent] = useState<DynamicIcon>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    setLoading(true);
    setError(null);

    loadSvgIcon(iconName)
      .then((component) => {
        setIconComponent(() => component);
      })
      .catch((caughtError: unknown) => {
        setError(caughtError);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [iconName]);
  return [IconComponent, setIconComponent, loading, error] as const;
}
