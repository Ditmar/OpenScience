import type { StoryObj, Meta } from '@storybook/react';
import SidePanel from './SidePanel';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';
import Tags from '../../atoms/Tags/Tags';
import logo from '../../../../assets/icons/logo.svg?raw';

const meta: Meta<typeof SidePanel> = {
  title: 'ui/components/molecules/side-panel',
  component: SidePanel,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <LogoFooter icon={logo} color="primary" />
        <Tags variant="default" labels={['workings', 'optimism', 'meaning', 'promoting']} />
      </>
    ),
  },
};

export const secondary: Story = {
  args: {
    children: (
      <>
        <LogoFooter icon={logo} color="secondary" />
        <Tags variant="default" labels={['continent', 'mpox', 'reservoir']} />
      </>
    ),
  },
};
