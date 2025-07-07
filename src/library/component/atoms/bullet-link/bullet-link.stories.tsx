import type { Meta, StoryObj } from '@storybook/react';
import BulletLink from './bullet-link';

const meta: Meta<typeof BulletLink> = {
  title: 'library/component/atoms/BulletLink',
  component: BulletLink,
  argTypes: {
    text: { control: 'text' },
    href: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof BulletLink>;

export const Default: Story = {
  args: {
    text: 'Inicio',
    href: '/',
  },
};

export const WithOnClick: Story = {
  args: {
    text: 'Contacto',
    onClick: () => {
      alert('Clic en ítem');
    },
  },
};
