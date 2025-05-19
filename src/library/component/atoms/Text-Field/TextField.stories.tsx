/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { Icon } from '../../../../ui/utils/vite-svgr/Icon';

const meta: Meta<typeof TextField> = {
  title: 'Components/Form/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Un campo de texto versátil y estilizado para formularios',
    docs: {
      description: {
        component: `
El componente TextField proporciona un campo de entrada de texto con diferentes estados,
tamaños y configuraciones de iconos. Puede incluir etiquetas descriptivas y mensajes de ayuda.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
    },
    leftIcon: { control: false },
    rightIcon: { control: false },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

// Base Story
export const Default: Story = {
  args: {
    label: 'Email Addres',
    value: '',
    placeholder: 'Input Text',
    helperText: 'Hint Text',
  },
  render: (args) => {
    function StoryComponent() {
      const [value, setValue] = useState(args.value);
      return (
        <div style={{ width: '330px' }}>
          <TextField {...args} value={value} onChange={setValue} />
        </div>
      );
    }
    return <StoryComponent />;
  },
};

// Error state
export const WithError: Story = {
  args: {
    ...Default.args,
    value: 'Input Text',
    error: true,
    helperText: 'Hint Text',
  },
  render: (args) => {
    function StoryComponent() {
      const [value, setValue] = useState(args.value);
      return (
        <div style={{ width: '330px' }}>
          <TextField {...args} value={value} onChange={setValue} />
        </div>
      );
    }
    return <StoryComponent />;
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    ...Default.args,
    value: 'Input Text',
    disabled: true,
    helperText: 'Hint Text',
  },
  render: (args) => {
    function StoryComponent() {
      const [value, setValue] = useState(args.value);
      return (
        <div style={{ width: '330px' }}>
          <TextField {...args} value={value} onChange={setValue} />
        </div>
      );
    }
    return <StoryComponent />;
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => {
    function SizesComponent() {
      const [values, setValues] = useState({
        small: '',
        medium: '',
        large: '',
      });

      return (
        <div style={{ width: '330px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <TextField
            label="Campo pequeño"
            value={values.small}
            onChange={(value) => {
              setValues({ ...values, small: value });
            }}
            placeholder="Tamaño pequeño"
            size="small"
          />
          <TextField
            label="Campo mediano"
            value={values.medium}
            onChange={(value) => {
              setValues({ ...values, medium: value });
            }}
            placeholder="Tamaño mediano"
            size="medium"
          />
          <TextField
            label="Campo grande"
            value={values.large}
            onChange={(value) => {
              setValues({ ...values, large: value });
            }}
            placeholder="Tamaño grande"
            size="large"
          />
        </div>
      );
    }
    return <SizesComponent />;
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => {
    function AllVariantsComponent() {
      const [values, setValues] = useState({
        normal: '',
        error: 'Input Text',
        disabled: 'Input Text',
        withLeftIcon: '',
        withRightIcon: '',
        withBothIcons: '',
      });

      const handleChange = (field: string, value: string) => {
        setValues((prev) => ({ ...prev, [field]: value }));
      };

      return (
        <div style={{ width: '330px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <TextField
            label="Input Text"
            value={values.normal}
            onChange={(value) => {
              handleChange('normal', value);
            }}
            placeholder="Introduce texto"
            helperText="Hint Text"
          />
          <TextField
            label="Email Addres"
            value={values.error}
            onChange={(value) => {
              handleChange('error', value);
            }}
            placeholder="Input Text"
            helperText="Hint Text"
            error
          />
          <TextField
            label="Email Addres"
            value={values.disabled}
            onChange={(value) => {
              handleChange('disabled', value);
            }}
            placeholder="No disponible"
            helperText="Hint Text"
            disabled
          />
        </div>
      );
    }
    return <AllVariantsComponent />;
  },
};

export const WithIconsLeft: Story = {
  args: {
    ...Default.args,
    label: 'Email Address',
    placeholder: 'ejemplo@correo.com',
    helperText: 'Introduce tu dirección de correo',
  },
  render: (args) => {
    function WithIconsComponent() {
      const [value, setValue] = useState(args.value);
      return (
        <div style={{ width: '330px' }}>
          <TextField
            {...args}
            value={value}
            onChange={setValue}
            leftIcon={
              <Icon iconName="facebook" width={25} height={25} stroke="black" fill="transparent" />
            }
          />
        </div>
      );
    }
    return <WithIconsComponent />;
  },
};
