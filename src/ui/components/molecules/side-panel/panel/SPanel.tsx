import React from 'react';
import type { IProps } from './types/IProps';
import LogoFooter from '../../../atoms/logo-footer/LogoFooter';
import Tags from '../../../atoms/Tags/Tags';
import './SPanel.scss';
import logo from '../../../../../assets/icons/logo.svg?raw';

function SPanel({ color = 'primary' }: IProps) {
  const tags = ['workings', 'optimism', 'meaning', 'promoting'];
  const getColorClassName = () => {
    return color === 'primary' ? 'panel--primary' : 'panel--secondary';
  };

  return (
    <div className={`panel ${getColorClassName()}`} data-testid="s-panel">
      <LogoFooter icon={logo} color="primary" />
      <Tags labels={tags} />
    </div>
  );
}

export default SPanel;
