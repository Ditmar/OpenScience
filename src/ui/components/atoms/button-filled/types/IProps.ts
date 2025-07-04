import React from "react";

export interface IProps {
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  borderRadius?: 'normal' | 'semi' | 'circle';
  colorVariant?: "disabled" | "white" | "black" | "grayStrongDark" | "graySoft" | "primary" | "secondary" | "tertiary" | "positive" | "negative" | "warning";
  dark?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  buttonVariant?: 'default' | 'ghost' | 'light' | 'soft' | 'outline';
}
