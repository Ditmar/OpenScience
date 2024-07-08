import React from 'react';
import type { IProps } from './types/IProps';
import './ResourceAndPageFooter.scss';

function ResourcesAndPageFooter({ children }: IProps) {
  return <div className="resources-and-page-footer">{children}</div>;
}

export default ResourcesAndPageFooter;
