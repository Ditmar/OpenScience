import React from 'react';
import './styles.scss';
import MultiFunctionButton from '../../atoms/multi-function-button/MultiFunctionButton';
import ButtonBurger from '../../atoms/button-burger/ButtonBurger';
import Pdf from '../../../../assets/icons/pdf.svg?raw';
import Media from '../../../../assets/icons/media.svg?raw';
import Share from '../../../../assets/icons/share.svg?raw';
import Reference from '../../../../assets/icons/reference1.svg?raw';
import burger from '../../../../assets/icons/burger-menu.svg?raw';
import type { IProps } from './types/IProps';

function OptionMenu({ icon, onClick }: IProps) {
  return (
    <div className="option-menu">
      <ButtonBurger icon={icon ?? burger} onClick={onClick} aria-label="Menu" />
      <div className="option-menu__items" role="menu">
        <MultiFunctionButton icon={Pdf} onClick={() => {}} color="primary">
          Pdf
        </MultiFunctionButton>
        <MultiFunctionButton icon={Share} onClick={() => {}} color="primary">
          Share
        </MultiFunctionButton>
        <MultiFunctionButton icon={Media} onClick={() => {}} color="primary">
          Media
        </MultiFunctionButton>
        <MultiFunctionButton icon={Reference} onClick={() => {}} color="primary">
          Reference
        </MultiFunctionButton>
      </div>
    </div>
  );
}

export default OptionMenu;
