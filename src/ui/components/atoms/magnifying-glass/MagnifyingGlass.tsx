import './style.scss';
import { useState } from 'react';
import type { IProps } from './types/IProps';

function MagnifyingGlass(props: IProps) {
  const { children, variant, icon, onClick } = props;

  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  return (
    <div className="glass">
      <button onClick={handleMoreClick} className="disguise" aria-label="icon">
        <span
          data-testid="button__glass"
          className="button__icons--glass"
          dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
        />
      </button>
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
