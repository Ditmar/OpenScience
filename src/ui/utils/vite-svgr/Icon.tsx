import { useDynamic } from '../hooks/useDynamic';
import type { IconProps } from './types/IProps';
import { Loader } from './Loader';

export function Icon({ iconName, ...props }: IconProps) {
  const [DynamicComponent] = useDynamic(iconName);

  return (
    <div>
      {DynamicComponent ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <DynamicComponent width={100} height={100} stroke="red" {...props} />
      ) : (
        <Loader />
      )}
    </div>
  );
}
