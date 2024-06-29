import React from 'react';
import './VolumeBox.scss';
import { formatDate } from '../../atoms/label-date/utils/dateFormatter';
import type { IProps } from './types/IProps';
import LabelDate from '../../atoms/label-date/LabelDate';

function VolumeBox({ children, className = '' }: IProps) {
  const formatVolumeBoxDate = (date: Date): string => {
    const formattedDate = formatDate(date);
    return formattedDate.replace(' | ', '. ');
  };

  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && React.isValidElement(child) && child.type === LabelDate) {
      const dateProp = (child.props as { date: Date }).date;
      const formattedDate = formatVolumeBoxDate(dateProp);
      return <span className="custom-labeldate">{formattedDate}</span>;
    }
    return child;
  });

  return (
    <div className={`volume-box ${className}`}>
      <div className="content">{clonedChildren}</div>
    </div>
  );
}

export default VolumeBox;
