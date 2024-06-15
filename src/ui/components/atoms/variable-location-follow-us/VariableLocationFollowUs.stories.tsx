import type { StoryObj, Meta } from '@storybook/react';
import VariableLocationFollowUs from './VariableLocationFollowUs';
import Ubicacion from '../../../../assets/icons/ubicacion.svg?raw';
import Facebook from '../../../../assets/icons/facebookk.svg?raw';
import Rectangle168 from './resources/images/Rectangle168.png';


const meta = {
  title: 'ui/components/atoms/variable-location-follow-us',
  component: VariableLocationFollowUs,
  argTypes: {
    pathImage: {},
  },
} as Meta<typeof VariableLocationFollowUs>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Location: Story = {
  args: {
    label: 'UBICACION',
    label1: 'SEGUINOS EN',
    iconlocation: Ubicacion,
    pathImage: String(Rectangle168),
    alt: 'Rectangle168',
    iconfacebook: Facebook,
    urllocation: 'https://www.google.com/maps',
    urlfacebok: 'https://www.facebook.com/tuPaginaDeFacebook',
  },
};
