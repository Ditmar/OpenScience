import './MSPanel.scss';
import { useState } from 'react';
import SidePanel from '../panel/SPanel';
import type { IProps } from './types/IProps';
import ButtonBurger from '../../../atoms/button-burger/ButtonBurger';

import menu from '../../../../../assets/icons/burger-menu.svg?raw';

function MSPanel({ variant = 'default' }: IProps) {
  const getColorClassName = () => {
    return variant === 'default' ? 'open-panel--default' : 'open-panel--color';
  };
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div data-testid="ms-panel">
      <ButtonBurger onClick={togglePanel} icon={menu} />
      <div className={`open-panel ${getColorClassName()}`}>{isPanelOpen && <SidePanel />}</div>
    </div>
  );
}

export default MSPanel;
