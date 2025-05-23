import React from 'react';

const IconModule = import.meta.glob('../../assets/icons/*.svg', { eager: true, query: '?react' });
const iconCache = new Map<string, React.FC<React.SVGProps<SVGSVGElement>>>();
export async function loadIcon(name: string) {
  if (iconCache.has(name)) {
    return iconCache.get(name);
  }
  const filePath = Object.keys(IconModule).find((key) => key.endsWith(`/${name}.svg`));
  if (filePath) {
    const mode = (await IconModule[filePath]) as {
      default: React.FC<React.SVGProps<SVGSVGElement>>;
    }
    return mode.default;
  }
  throw new Error(`Icon not found: ${name}`);
}
