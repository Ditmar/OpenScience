import React from 'react';
import CheckIcon from '../../../../assets/icons/check.svg?react';

const icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  check: CheckIcon,
};

interface IconProps {
  name: keyof typeof icons;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const SvgIcon = icons[name];
  return <SvgIcon className={className} />;
};

export default Icon;
