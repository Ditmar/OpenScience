import React from 'react';
import CircleQuarters from '../../../../assets/icons/circle-quarters.svg?react';
import Close from '../../../../assets/icons/Close-URL.svg?react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const IconCircleQuarters: React.FC<IconProps> = ({ className, style }) => {
  return (
    <CircleQuarters
      className={className}
      style={style}
      fill="currentColor" // Esto permite heredar el color del contexto
    />
  );
};

export const IconClose: React.FC<IconProps> = ({ className, style }) => {
  return (
    <Close
      className={className}
      style={style}
      fill="currentColor" // Esto permite heredar el color del contexto
    />
  );
};
