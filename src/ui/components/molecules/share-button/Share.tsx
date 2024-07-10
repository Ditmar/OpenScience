import React from 'react';
import './styles.scss';
import IconButton from '../../atoms/icon-button/IconButton';
import Facebook from '../../../../assets/icons/facebook1.svg?raw';
import Telegram from '../../../../assets/icons/telegram.svg?raw';
import Whatsapp from '../../../../assets/icons/whatsapp.svg?raw';
import type { IProps } from './types/IProps';

function Share({ onClick }: IProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };
  return (
    <div
      className="share"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label="Share"
    >
      <IconButton icon={Whatsapp} />
      <IconButton icon={Telegram} />
      <IconButton icon={Facebook} />
    </div>
  );
}
export default Share;
