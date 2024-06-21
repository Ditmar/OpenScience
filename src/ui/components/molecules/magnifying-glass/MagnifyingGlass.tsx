import './style.scss';
import { useState } from 'react';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';

function MagnifyingGlass(props: IProps) {
  const { children, variant, icon, onClick } = props;

  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  return (
    <div className="glass">
      <button onClick={handleMoreClick} className="disguise" aria-label="icon">
        {icon && <Icon data-testid="button__glass" src={icon} className="button__icons--glass" />}
      </button>
      {showMore && <input className="label__glass" />}
      {showMore && <hr className={`divider--${variant}`} />}
      {showMore && (
        <button className="button1" onClick={onClick}>
          <span data-testid="button__glass1" className="button__label--glass">
            {children}
          </span>
        </button>
      )}
    </div>
  );
}
export default MagnifyingGlass;
