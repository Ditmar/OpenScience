import { useState } from 'react';
import './MSPanel.scss';
import ButtonBurger from '../../../atoms/button-burger/ButtonBurger';
import SidePanel from '../panel/SPanel';
import menu from '../../../../../assets/icons/burger-menu.svg?raw';

function MSPanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div data-testid="ms-panel">
      <ButtonBurger onClick={togglePanel} icon={menu} />
      <div className="open-panel">{isPanelOpen && <SidePanel />}</div>
    </div>
  );
}

export default MSPanel;
