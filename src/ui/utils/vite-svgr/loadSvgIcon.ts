import type { DynamicIcon } from './types/IconType';

export async function loadSvgIcon(iconName: string): Promise<DynamicIcon> {
  const module = (await import(`../../../assets/icons/${iconName}.svg?react`)) as {
    default: DynamicIcon;
  };
  return module.default;
}
