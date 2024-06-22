import type { StoryObj, Meta } from '@storybook/react';
import VariableLocationFollowUs from './VariableLocationFollowUs';
import Ubicacion from '../../../../assets/icons/ubicacion.svg?raw';
import facebook from '../../../../assets/icons/facebookk.svg?raw';


const meta = {
  title: 'ui/components/atoms/variable-location-follow-us',
  component: VariableLocationFollowUs,
} as Meta<typeof VariableLocationFollowUs>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Location: Story = {
  args: {
    text: 'UBICACION',
    icon: Ubicacion,
    url: 'https://www.google.com/maps',
  },
};
export const Divider: Story = {
  args: {
    divider: '|',
  },
};
export const Facebook: Story = {
  args: {
    text: 'SEGUINOS EN',
    icon: facebook,
    url: 'https://www.facebook.com/tuPaginaDeFacebook',
  },
};

