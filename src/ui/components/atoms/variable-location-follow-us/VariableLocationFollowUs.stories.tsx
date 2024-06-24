import type { StoryObj, Meta } from '@storybook/react';
import VariableLocationFollowUs from './VariableLocationFollowUs';
import Ubicacion from '../../../../assets/icons/ubicacion.svg?raw';
import Facebook from '../../../../assets/icons/facebookk.svg?raw';


const meta = {
  title: 'ui/components/atoms/variable-location-follow-us',
  component: VariableLocationFollowUs,
} as Meta<typeof VariableLocationFollowUs>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Links: Story = {
  args: {
    iconlocation: Ubicacion,
    divider: '|',
    iconfacebook: Facebook,
  },
};
