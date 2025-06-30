import type { Meta, StoryObj } from '@storybook/react';
import { CountryList } from './CountryList';

const meta: Meta<typeof CountryList> = {
  title: 'ui/Components/Molecules/CountryList',
  component: CountryList,
  parameters: {
    docs: { page: null },
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Tamaño de los elementos de la lista',
    },
    flagVariant: {
      options: ['circular', 'rectangular'],
      control: { type: 'radio' },
      description: 'Forma de las banderas',
      defaultValue: 'circular',
    },
    containerVariant: {
      options: ['rounded', 'straight'],
      control: { type: 'radio' },
      description: 'Forma de los bordes del contenedor',
      defaultValue: 'rounded',
    },
    maxHeight: {
      control: { type: 'text' },
      description: 'Altura máxima de la lista antes de hacer scroll',
    },
    showTitle: {
      control: { type: 'boolean' },
      description: 'Mostrar u ocultar el título',
    },
    title: {
      control: { type: 'text' },
      description: 'Texto del título',
    },
    titleSize: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Tamaño del título',
      defaultValue: 'medium',
    },
    onCountrySelect: {
      action: 'countrySelected',
      description: 'Callback cuando se selecciona un país',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CountryList>;

export const Default: Story = {
  args: {
    size: 'medium',
    flagVariant: 'circular',
    containerVariant: 'rounded',
    maxHeight: '300px',
    showTitle: true,
    title: 'Select Country',
    titleSize: 'medium',
  },
};

export const RectangularFlags: Story = {
  args: {
    ...Default.args,
    flagVariant: 'rectangular',
  },
};

export const StraightContainer: Story = {
  args: {
    ...Default.args,
    containerVariant: 'straight',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
    titleSize: 'small',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
    titleSize: 'large',
  },
};

export const WithoutTitle: Story = {
  args: {
    ...Default.args,
    showTitle: false,
  },
};
