import { useState } from 'react';
import './PdfShareButton.scss';
import VariableButton from '../../atoms/variable-button/VariableButton';
import IconButton from '../../atoms/icon-button/IconButton';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';
import Whatsapp from '../../../../assets/icons/whatsapp.svg?raw';
import Facebook from '../../../../assets/icons/facebook1.svg?raw';
import Telegram from '../../../../assets/icons/telegram.svg?raw';

function PdfShareButton() {
  const [openIcons, setOpenIcons] = useState(false);
  return (
    <div className="pdf-share-buttons">
      <VariableButton icon={PdfIcon} onClick={() => {}} />
      <div className="share">
        <VariableButton
          icon={LinkIcon}
          onClick={() => {
            setOpenIcons((prev) => !prev);
          }}
        />
        {openIcons && (
          <div className="share-buttons">
            <IconButton icon={Whatsapp} onClick={() => {}} />
            <IconButton icon={Facebook} onClick={() => {}} />
            <IconButton icon={Telegram} onClick={() => {}} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PdfShareButton;
