import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import type { MouseEventHandler } from 'react';
import { InitialButtonRoot } from './initial-button.styles';

export interface InitialButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
}

function InitialButton({ label, onClick, fullWidth = false }: InitialButtonProps) {
  return (
    <InitialButtonRoot
      variant="contained"
      fullWidth={fullWidth}
      endIcon={<LoginIcon />}
      onClick={onClick}
    >
      {label}
    </InitialButtonRoot>
  );
}

export default InitialButton;
