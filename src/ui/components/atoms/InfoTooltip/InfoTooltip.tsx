import React, { useState, useRef, useEffect } from 'react';
import styles from './InfoTooltip.module.scss';
import TooltipIcon from './TooltipIcon';
import type { InfoTooltipProps } from './types/IProps';

type TimeoutType = ReturnType<typeof setTimeout>;

function InfoTooltip({
  content,
  position = 'top',
  size = 'medium',
  className = '',
  icon,
  delay = 300,
  children,
}: InfoTooltipProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [showTimeout, setShowTimeout] = useState<TimeoutType | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (showTimeout) clearTimeout(showTimeout);
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setShowTimeout(timeout);
  };

  const hideTooltip = () => {
    if (showTimeout) {
      clearTimeout(showTimeout);
      setShowTimeout(null);
    }
    setIsVisible(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') hideTooltip();
  };

  useEffect(() => {
    return () => {
      if (showTimeout) clearTimeout(showTimeout);
    };
  }, [showTimeout]);

  const tooltipId = `tooltip-${content.substring(0, 5)}`;
  const containerClasses = `${styles.container} ${className}`;
  const tooltipClasses = `${styles.tooltip} ${styles[position]} ${styles[size]}`;
  const tooltipIcon = icon ?? <TooltipIcon />;

  return (
    <div
      className={containerClasses}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      onKeyDown={handleKeyDown}
      ref={triggerRef}
      tabIndex={0}
      role="button"
      aria-describedby={tooltipId}
    >
      {children ?? tooltipIcon}
      {isVisible && (
        <div id={tooltipId} className={tooltipClasses} ref={tooltipRef} role="tooltip">
          {content}
        </div>
      )}
    </div>
  );
}

export default InfoTooltip;
