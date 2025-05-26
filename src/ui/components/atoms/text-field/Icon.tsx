import React from 'react';
import SearchIcon from '../../../../assets/icons/search.svg?react';
import ErrorIcon from '../../../../assets/icons/error.svg?react';

const icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  search: SearchIcon,
  error: ErrorIcon,
};

interface IconProps {
  name: keyof typeof icons;
  className?: string;
}

function Icon({ name, className }: IconProps): JSX.Element {
  const SvgIcon = icons[name];
  return <SvgIcon className={className} />;
}

export default Icon;
