import type { Meta, StoryObj } from '@storybook/react';
import { CountryFlag } from './IconFlag';
import { allCountries } from './countryMock';

const meta: Meta<typeof CountryFlag> = {
  title: 'ui/Components/Atoms/IconFlag',
  component: CountryFlag,
  parameters: {
    docs: { page: null },
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Tamaño del texto',
    },
    variant: {
      options: ['circular', 'rectangular'],
      control: { type: 'radio' },
      description: 'Forma de la bandera',
      defaultValue: 'circular',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CountryFlag>;

export const Default: Story = {
  args: {
    ...allCountries.find((c) => c.code === 'AR'),
    size: 'medium',
    variant: 'circular',
  },
};

export const Rectangular: Story = {
  args: {
    ...allCountries.find((c) => c.code === 'AR'),
    variant: 'rectangular',
  },
};

export const Small: Story = {
  args: {
    ...allCountries.find((c) => c.code === 'AR'),
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...allCountries.find((c) => c.code === 'AR'),
    size: 'large',
  },
};

export const AllCountries: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '16px',
        width: '100%',
      }}
    >
      {allCountries.map((country) => (
        <CountryFlag
          key={country.code}
          src={country.src}
          alt={country.alt}
          name={country.name}
          dialCode={country.dialCode}
          code={country.code}
        />
      ))}
    </div>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
    viewport: { defaultViewport: 'desktop' },
  },
};
