import { useEffect, useState } from 'react';
import type { ComponentType, SVGProps } from 'react';
import type { IconName } from './types/IProps';

type DynamicIcon = ComponentType<SVGProps<SVGSVGElement>>;

export function useDynamicIcon(iconName: IconName) {
  const [IconComponent, setIconComponent] = useState<DynamicIcon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let isMounted = true;

    const loadIcon = async () => {
      setLoading(true);
      setError(null);

      try {
        const module = (await import(`../../../../assets/icons/${iconName}.svg?react`)) as {
          default: DynamicIcon;
        };

        if (isMounted) {
          setIconComponent(() => module.default);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setIconComponent(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadIcon().catch((err: unknown) => {
      if (isMounted) {
        setError(err);
        setIconComponent(null);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [iconName]);

  return [IconComponent, setIconComponent, loading, error] as const;
}
