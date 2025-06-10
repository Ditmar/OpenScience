import { useDynamicIcon } from '../hooks/useDynamicIcon';
import type { IconProps } from './types/IProps';
import { Loader } from './Loader';

export function Icon({ iconName, ...props }: IconProps) {
  const [DynamicComponent] = useDynamicIcon(iconName);

  return (
    <div>
      {DynamicComponent ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <DynamicComponent {...props} />
      ) : (
        <Loader />
      )}
    </div>
  );
}
