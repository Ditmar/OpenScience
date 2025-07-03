import React from "react";

export interface IProps {
  text: string;
  textColor?: string;

  buttonColor?: string;
  dark?: boolean;

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  borderRadius?: 'normal' | 'semi' | 'circle';
  size?: 'small' | 'medium' | 'large';
}
