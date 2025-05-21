import React from 'react';

export interface IToggleProps {
  /** Estado activado/desactivado del toggle (requerido) */
  checked: boolean;
  /** Callback que se ejecuta al cambiar el estado (requerido) */
  onChange: (value: boolean) => void;
  /** Indica si el toggle está deshabilitado */
  disabled?: boolean;
  /** Variante de color del toggle */
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  /** Tamaño del toggle */
  size?: 'small' | 'medium' | 'large';
  /** Clase CSS adicional */
  className?: string;
  /** ID para pruebas */
  'data-testid'?: string;
  /** Estilos inline */
  style?: React.CSSProperties;
  /** Dimensiones personalizadas */
  dimensions?: {
    width: number;
    height: number;
    padding: number;
    circleSize: number;
  };
  /** ID único para el elemento */
  id?: string;
  /** Etiqueta accesible */
  'aria-label'?: string;
  /** Referencia a elemento que describe el toggle */
  'aria-labelledby'?: string;
  /** Estado accesible (puede derivarse de checked) */
  'aria-checked'?: boolean;
}
