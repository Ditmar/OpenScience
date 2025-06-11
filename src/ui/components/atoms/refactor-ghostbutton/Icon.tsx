import circleQuarters from '../../../../assets/icons/circle-quarters.svg?raw';

interface IconProps {
  size?: number;
  className?: string;
  'data-testid'?: string;
}

function Icon({ size = 24, className, 'data-testid': testId }: IconProps) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        verticalAlign: 'middle',
        lineHeight: 1,
      }}
      dangerouslySetInnerHTML={{ __html: circleQuarters }}
      data-testid={testId}
    />
  );
}

export default Icon;
