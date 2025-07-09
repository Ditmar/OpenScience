import type { Meta, StoryObj } from '@storybook/react';
import BurgerMenu from './BurgerMenu';

const meta: Meta<typeof BurgerMenu> = {
  title: 'library/component/molecules/BurgerMenu',
  component: BurgerMenu,
};

export default meta;

type Story = StoryObj<typeof BurgerMenu>;

export const Default: Story = {
  args: {
    children: (
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'white' }}>
        <li>Perfil</li>
        <li>Configuración</li>
        <li>Cerrar sesión</li>
      </ul>
    ),
  },
};
