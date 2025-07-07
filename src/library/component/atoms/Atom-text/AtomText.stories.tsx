import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AtomText from './AtomText';
import type { AtomTextProps } from './types/IProps';

const meta: Meta<typeof AtomText> = {
  title: 'library/component/Atoms/AtomText',
  component: AtomText,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['paragraph_dark', 'icon_text', 'light'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    align: {
      control: { type: 'radio' },
      options: ['left', 'center', 'right'],
    },
    fontWeight: {
      control: { type: 'number' },
    },
    gutterBottom: {
      control: { type: 'boolean' },
    },
  },
  args: {
    children: 'Texto de ejemplo',
    color: 'paragraph_dark',
    size: 'md',
    align: 'left',
    fontWeight: 400,
    gutterBottom: false,
  },
};

export default meta;

type Story = StoryObj<AtomTextProps>;

export const Default: Story = {};

export function Sizes() {
  return (
    <>
      <AtomText size="sm">Texto tamaño pequeño (sm)</AtomText>
      <AtomText size="md">Texto tamaño mediano (md)</AtomText>
      <AtomText size="lg">Texto tamaño grande (lg)</AtomText>
    </>
  );
}

export function Colors() {
  return (
    <>
      <AtomText color="paragraph_dark">Color: paragraph_dark</AtomText>
      <AtomText color="icon_text">Color: icon_text</AtomText>
      <div style={{ backgroundColor: '#333' }}>
        <AtomText color="light">Color: light (sobre fondo oscuro)</AtomText>
      </div>
    </>
  );
}

export function Alignment() {
  return (
    <div style={{ width: 300 }}>
      <AtomText align="left">Alineado a la izquierda</AtomText>
      <AtomText align="center">Alineado al centro</AtomText>
      <AtomText align="right">Alineado a la derecha</AtomText>
    </div>
  );
}

export function FontWeightVariants() {
  return (
    <>
      <AtomText fontWeight={300}>Peso fuente 300</AtomText>
      <AtomText fontWeight={400}>Peso fuente 400 (normal)</AtomText>
      <AtomText fontWeight={700}>Peso fuente 700 (negrita)</AtomText>
    </>
  );
}
