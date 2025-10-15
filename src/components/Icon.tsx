import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconName } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  name: IconName | [string, string];
  className?: string;
  size?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
}

const Icon = ({ name, className = '', size }: IconProps) => {
  return <FontAwesomeIcon icon={name as IconName} className={className} size={size} />;
};

export default Icon;
