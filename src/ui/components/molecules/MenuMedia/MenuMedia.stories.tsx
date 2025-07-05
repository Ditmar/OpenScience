import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import { MenuMedia } from './MenuMedia';
import Rectangle10 from '../../atoms/hero-banner/__mock__/imgs/Rectangle10.png';
import { lightTheme } from '../../../../style-library/themes/default';

const descriptions = [
  'The recent 2022 international outbreak has caused an unprecedented transmission of the virus mainly in men ' +
    'that have sex with men. The extent of the outbreak has decreased dramatically after a few months, with 13 to ' +
    '37 daily cases worldwide in February 2023. We still do not understand the reasons why the MPXV clade circulating ' +
    'in 2022 was so transmissible in humans.',
  'Table data is not currently available. Further information will be updated once studies are concluded.',
  'Additional data and analysis are ongoing. This section will include graphical interpretations, sources, and visual context.',
];

const meta: Meta<typeof MenuMedia> = {
  title: 'ui/components/molecules/MenuMedia',
  component: MenuMedia,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MenuMedia>;

const defaultArgs = {
  imageSrc: Rectangle10,
  imageAlt: 'Imagen Rectangle10',
  onOpenImage: () => {
    alert('Imagen abierta');
  },
  descriptions,
};

export const Small: Story = {
  args: {
    ...defaultArgs,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    ...defaultArgs,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...defaultArgs,
    size: 'large',
  },
};
