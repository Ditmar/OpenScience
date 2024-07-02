import React, { useState } from 'react';
import VariableButton from '../../atoms/variable-button/VariableButton';
import IconButton from '../../atoms/icon-button/IconButton';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';
import WhatsappIcon from '../../../../assets/icons/whatsapp.svg?raw';
import FacebookIcon from '../../../../assets/icons/facebook1.svg?raw';
import TelegramIcon from '../../../../assets/icons/telegram.svg?raw';
import './ButtonsPdfShare.scss';
import type { IProps } from './types/IProps';

function ButtonsPdfShare({ onClick }: IProps) {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleShare = () => {
    setIsShareOpen(!isShareOpen);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="button-pdf-share" data-testid="pdf-share-button">
      <VariableButton icon={PdfIcon} />
      <div className="share-container">
        <VariableButton icon={LinkIcon} onClick={toggleShare} />
        <div className="share-button">
          {isShareOpen && <IconButton icon={WhatsappIcon} />}
          {isShareOpen && <IconButton icon={FacebookIcon} />}
          {isShareOpen && <IconButton icon={TelegramIcon} />}
        </div>
      </div>
    </div>
  );
}

export default ButtonsPdfShare;
