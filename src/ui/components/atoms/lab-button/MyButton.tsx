// MyButton.tsx

import { Button } from '@mui/material';

type MyButtonProps = {
  label: string;
};

export const MyButton = ({ label }: MyButtonProps) => {
  return <Button>{label}</Button>;
};




