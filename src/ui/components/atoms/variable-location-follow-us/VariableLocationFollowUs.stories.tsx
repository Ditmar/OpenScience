import type { StoryObj, Meta } from '@storybook/react';
import VariableLocationFollowUs from './VariableLocationFollowUs';
import Ubicacion from '../../../../assets/icons/ubicacion.svg?raw';
import Facebook from '../../../../assets/icons/facebookk.svg?raw';
import Rectangle168 from './mock/img/Rectangle168.png';

const meta = {
  title: 'ui/components/atoms/variable-location-follow-us',
  component: VariableLocationFollowUs,
  argTypes: {
    pathImage: {
      control: 'select',
    },
  },
} as Meta<typeof VariableLocationFollowUs>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Location: Story = {
  args: {
    label: 'UBICACION',
    iconlocation: Ubicacion,
    pathImage: String(Rectangle168),
    alt: 'Rectangle168',
    iconfacebook: Facebook,
    label1: 'SIGUENOS EN',
  },
};
