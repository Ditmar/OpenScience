import React from 'react';
import styles from './Divider.module.scss'; // Importamos los estilos como CSS Modules
import type { IProps } from './types/IProps';

function Divider(props: IProps) {
  const { variant } = props;
  const variantClass = `divider--${variant}`; // Convertimos el variant a BEM
  return <hr className={styles[variantClass]} />;
}

export default Divider;
