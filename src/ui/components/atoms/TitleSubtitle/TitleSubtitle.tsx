import React from 'react';
import type { IProps } from './types/IProps';
import styles from './TitleSubtitle.module.scss';
import { TitleTag } from './TitleTag';
import { SubtitleTag } from './SubtitleTag';

function TitleSubtitle({
  title,
  subtitle,
  size = 'md',
  alignment = 'left',
  variant = 'default',
  titleTag = 'h2',
  subtitleTag = 'p',
  className = '',
}: IProps) {
  const containerClass = [
    styles['title-subtitle'],
    styles[`title-subtitle--size-${size}`],
    styles[`title-subtitle--alignment-${alignment}`],
    styles[`title-subtitle--variant-${variant}`],
    className,
  ].join(' ');

  const titleClass = `${styles['title-subtitle__title']} ${
    styles[`title-subtitle__title--${titleTag}`]
  }`;
  const subtitleClass = `${styles['title-subtitle__subtitle']} ${
    styles[`title-subtitle__subtitle--${subtitleTag}`]
  }`;

  return (
    <div className={containerClass}>
      <TitleTag tag={titleTag} className={titleClass}>
        {title}
      </TitleTag>
      {subtitle && (
        <SubtitleTag tag={subtitleTag} className={subtitleClass}>
          {subtitle}
        </SubtitleTag>
      )}
    </div>
  );
}

export default TitleSubtitle;
