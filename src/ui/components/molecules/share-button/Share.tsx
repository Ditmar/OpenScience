import React from 'react';
import IconButton from '../../atoms/icon-button/IconButton';
import Facebook from '../../../../assets/icons/facebook1.svg?raw';
import Telegram from '../../../../assets/icons/telegram.svg?raw';
import Whatsapp from '../../../../assets/icons/whatsappp.svg?raw';
import type { IProps } from './types/IProps';

function Share(props: IProps) {
  const { onClick } = props;
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };
  return (
    <div role="button" tabIndex={0} onClick={onClick} onKeyDown={handleKeyDown} aria-label="Share">
      <IconButton icon={Whatsapp} />
      <br />
      <IconButton icon={Telegram} />
      <br />
      <IconButton icon={Facebook} />
      <br />
    </div>
  );
}
export default Share;
