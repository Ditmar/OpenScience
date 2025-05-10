import React from 'react';
import styles from './Heading.module.scss';
import type { IHeadingProps } from './types/IProps';

function Heading({
  level = 'h1',
  children,
  weight = 'regular',
  style = 'sans',
  className,
}: IHeadingProps): JSX.Element {
  const Tag = level as keyof JSX.IntrinsicElements;

  // Función para concatenar clases
  const combineClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

  return (
    <Tag
      className={combineClasses(
        styles.heading,
        styles[level],
        styles[weight],
        styles[style],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export default Heading;
