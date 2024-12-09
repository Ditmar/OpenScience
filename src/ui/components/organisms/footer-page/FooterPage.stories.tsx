import type { StoryObj, Meta } from '@storybook/react';
import FooterPage from './FooterPage';
import FacebookIcons from '../../../../assets/icons/facelocation.svg?raw';
import location from '../../../../assets/icons/location.svg?raw';
import '../../../../globals/_variables.scss';

const meta: Meta<typeof FooterPage> = {
  title: 'ui/components/organisms/footer-page',
  component: FooterPage,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'dotted', 'dashed'],
    },
  },
  args: {
    icon: location,
    children: 'UBICACIÓN',
    variant: 'solid',
    icon1: FacebookIcons,
    children1: 'SÍGUENOS EN',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
