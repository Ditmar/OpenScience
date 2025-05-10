import React, { useEffect, useState } from 'react';
import type { FunctionComponent } from 'react';
import type { IconName } from './types/IProps';

export function useDynamic(iconName: IconName) {
  const [DynamicComponent, setDynamicComponent] = useState<FunctionComponent<
    React.SVGProps<SVGSVGElement>
  > | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    const loadSvg = async () => {
      const module = (await import(`../../../assets/icons/${iconName}.svg?react`)) as {
        default: FunctionComponent<React.SVGProps<SVGSVGElement>>;
      };
      setDynamicComponent(() => module.default);
    };
    loadSvg()
      .then(() => {})
      .catch((caughtError: unknown) => {
        setError(caughtError);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [iconName]);
  return [DynamicComponent, setDynamicComponent, loading, error] as const;
}
