import React from 'react';
import styles from './InfoTooltip.module.scss';

function TooltipIcon(): JSX.Element {
  return (
    <span className={styles.icon}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="
          M8 1C4.13401 1 1 4.13401 1 8
          C1 11.866 4.13401 15 8 15
          C11.866 15 15 11.866 15 8
          C15 4.13401 11.866 1 8 1ZM8 13.5
          C4.96243 13.5 2.5 11.0376 2.5 8
          C2.5 4.96243 4.96243 2.5 8 2.5
          C11.0376 2.5 13.5 4.96243 13.5 8
          C13.5 11.0376 11.0376 13.5 8 13.5Z
        "
          fill="currentColor"
        />
        <path
          d="
          M7.25 5.25
          C7.25 5.66421 7.58579 6 8 6
          C8.41421 6 8.75 5.66421 8.75 5.25
          C8.75 4.83579 8.41421 4.5 8 4.5
          C7.58579 4.5 7.25 4.83579 7.25 5.25Z
        "
          fill="currentColor"
        />
        <path
          d="
          M8.75 7.75
          C8.75 7.33579 8.41421 7 8 7
          C7.58579 7 7.25 7.33579 7.25 7.75
          V11.25
          C7.25 11.6642 7.58579 12 8 12
          C8.41421 12 8.75 11.6642 8.75 11.25
          V7.75Z
        "
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export default TooltipIcon;
