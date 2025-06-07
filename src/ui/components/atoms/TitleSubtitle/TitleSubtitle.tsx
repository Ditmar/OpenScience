import React from 'react';
import type { IProps } from './types/IProps';
import styles from './TitleSubtitle.module.scss';

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
  const containerClass = `${styles['title-subtitle']} 
    ${styles[`title-subtitle--size-${size}`]} 
    ${styles[`title-subtitle--alignment-${alignment}`]} 
    ${styles[`title-subtitle--variant-${variant}`]} 
    ${className}`.trim();

  const titleClass = `${styles['title-subtitle__title']} ${
    styles[`title-subtitle__title--${titleTag}`]
  }`;
  const subtitleClass = `${styles['title-subtitle__subtitle']} ${
    styles[`title-subtitle__subtitle--${subtitleTag}`]
  }`;

  const TitleTag = titleTag as keyof JSX.IntrinsicElements;
  const SubtitleTag = subtitleTag as keyof JSX.IntrinsicElements;

  return (
    <div className={containerClass}>
      <TitleTag className={titleClass}>{title}</TitleTag>
      {subtitle && <SubtitleTag className={subtitleClass}>{subtitle}</SubtitleTag>}
    </div>
  );
}

export default TitleSubtitle;