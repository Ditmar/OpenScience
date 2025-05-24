import type { Meta, StoryObj } from '@storybook/react';
import UserTextStat from './UserTextStat';

const meta: Meta<typeof UserTextStat> = {
  title: 'Components/UserTextStat',
  component: UserTextStat,
};
export default meta;

type Story = StoryObj<typeof UserTextStat>;

export const Default: Story = {
  args: {
    title: 'Total usuarios',
    mainValue: 1278,
    subValue: 'Últimos 7 días',
    icon: <span>ℹ️</span>,
  },
};

export const Success: Story = {
  args: {
    title: 'Usuarios activos',
    mainValue: 1032,
    subValue: '82% activos',
    variant: 'success',
    icon: <span>✅</span>,
  },
};

export const Warning: Story = {
  args: {
    title: 'Cuentas pendientes',
    mainValue: 213,
    subValue: 'Alerta de vencimiento',
    variant: 'warning',
    icon: <span>⚠️</span>,
  },
};

export const Error: Story = {
  args: {
    title: 'Errores del sistema',
    mainValue: 7,
    subValue: 'Última hora',
    variant: 'error',
    icon: <span>❌</span>,
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Suscripciones',
    mainValue: 524,
    subValue: 'Activas este mes',
    description: 'Incluye renovaciones automáticas',
    variant: 'success',
    icon: <span>✅</span>,
  },
};

export const LargeSize: Story = {
  args: {
    title: 'Ingresos totales',
    mainValue: '$34,920',
    subValue: 'Este trimestre',
    size: 'large',
    variant: 'default',
    icon: <span>ℹ️</span>,
  },
};
