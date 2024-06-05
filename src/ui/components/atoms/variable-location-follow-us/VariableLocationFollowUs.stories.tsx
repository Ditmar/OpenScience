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
    url: 'https://www.google.com/maps',
    icon: Ubicacion,
  },
};
export const img: Story = {
  args: {
    pathImage: String(Rectangle168),
    alt: 'Rectangle168',
  },
};
export const facebook: Story = {
  args: {
    label: 'SIGUENOS EN',
    url: 'https://www.facebook.com/tuPaginaDeFacebook',
    icon: Facebook,
  },
};
