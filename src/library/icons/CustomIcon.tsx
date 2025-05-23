import React, { useEffect, useState } from 'react';
import { loadIcon } from './IconLoader';
import type { CustomIconsProps } from './Custom.type';

export function CustomIcon({ name, className }: CustomIconsProps) {
  console.log('---------------> Rendering icon:', name);
  const [Icon, setIcon] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);
  useEffect(() => {
    let isMounted = true;
    loadIcon(name)
      .then((component) => {
        if (isMounted && component) {
          setIcon(() => component);
        }
      })
      .catch((error) => {
        throw new Error(`Error loading icon: ${error}`);
      });
    return () => {
      isMounted = false;
    };
  }, [name]);
  if (!Icon) {
    return null;
  }
  return <Icon className={className} />;
}
