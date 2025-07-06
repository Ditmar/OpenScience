import { useState } from 'react';
import './ShareMenu.scss';
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
    <div className="share-container">
      <button className="share-button" onClick={toggleShareOptions}>
        <MultiFunctionButton icon={Share} color="primary">
          share
        </MultiFunctionButton>{' '}
        COMPARTIR
      </button>

      {isOpen && (
        <div className="share-options">
          <div className="share-option">
            <div className="share-icon-wrapper whatsapp">
              <IconButton icon={Whatsapp} color="primary">
                whatsapp
              </IconButton>
            </div>
          </div>
          <div className="share-option">
            <div className="share-icon-wrapper telegram">
              <IconButton icon={Telegram} color="primary">
                telegram
              </IconButton>
            </div>
          </div>
          <div className="share-option">
            <div className="share-icon-wrapper facebook">
              <IconButton icon={Facebook} color="primary">
                facebook
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareMenu;
