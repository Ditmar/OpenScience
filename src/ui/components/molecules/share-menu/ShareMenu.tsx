// src/components/ShareMenu/ShareMenu.tsx

import { useState } from 'react';

import {
  ShareContainer,
  ShareButton,
  ShareOptions,
  ShareOption,
  ShareIconWrapper,
} from './ShareMenu.styles';

import MultiFunctionButton from '../../atoms/multi-function-button/MultiFunctionButton';
import IconButton from '../../atoms/icon-button/IconButton';
import Whatsapp from '../../../../assets/icons/whatsapp.svg?raw';
import Facebook from '../../../../assets/icons/facebook1.svg?raw';
import Telegram from '../../../../assets/icons/telegram.svg?raw';
import Share from '../../../../assets/icons/share.svg?raw';

function ShareMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleShareOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ShareContainer>
      <ShareButton onClick={toggleShareOptions}>
        <MultiFunctionButton icon={Share} color="primary">
          share
        </MultiFunctionButton>{' '}
        COMPARTIR
      </ShareButton>

      {isOpen && (
        <ShareOptions>
          <ShareOption>
            <ShareIconWrapper className="whatsapp">
              <IconButton icon={Whatsapp} color="primary">
                whatsapp
              </IconButton>
            </ShareIconWrapper>
          </ShareOption>
          <ShareOption>
            <ShareIconWrapper className="telegram">
              <IconButton icon={Telegram} color="primary">
                telegram
              </IconButton>
            </ShareIconWrapper>
          </ShareOption>
          <ShareOption>
            <ShareIconWrapper className="facebook">
              <IconButton icon={Facebook} color="primary">
                facebook
              </IconButton>
            </ShareIconWrapper>
          </ShareOption>
        </ShareOptions>
      )}
    </ShareContainer>
  );
}

export default ShareMenu;
