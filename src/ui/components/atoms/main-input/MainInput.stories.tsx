import type { Meta, StoryObj } from '@storybook/react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MainInput from './MainInput';

const meta: Meta<typeof MainInput> = {
  title: 'ui/components/atoms/main-input',
  component: MainInput,
  args: {
    value: '',
    onChange: () => {},
  },
};
export default meta;
type Story = StoryObj<typeof MainInput>;

export const Default: Story = {
  args: {
    label: 'Nombre',
    placeholder: 'Ingresa tu nombre',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Correo',
    placeholder: 'correo@ejemplo.com',
    leftIcon: <MailOutlineIcon fontSize="small" />,
    rightIcon: <VisibilityIcon fontSize="small" />,
  },
};

export const WithHint: Story = {
  args: {
    label: 'Usuario',
    placeholder: 'usuario123',
    hint: 'Debe tener al menos 6 caracteres',
  },
};

export const WithError: Story = {
  args: {
    label: 'Contraseña',
    placeholder: '********',
    errorMsg: 'Campo obligatorio',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Solo lectura',
    value: 'Texto fijo',
    disabled: true,
  },
};
