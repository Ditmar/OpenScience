import type { StoryObj, Meta } from '@storybook/react';
import LogoLocationLinkfb from './LogoLocationLinkfb';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';
import logo from '../../../../assets/icons/logo.svg?raw';

const meta: Meta<typeof LogoLocationLinkfb> = {
  title: 'ui/components/molecules/logo-location-linkfb',
  component: LogoLocationLinkfb,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <LogoFooter color="primary" icon={logo} />
        <div className="resources-page">
          Aqui pondria el componente de recursos y página del Footer, Si tan solo tuviera uno :c
        </div>
        <div className="variable-link">
          Aqui pondria el componente de enlace variable, Si tan solo tuviera uno D:
        </div>
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    children: (
      <>
        <LogoFooter color="secondary" icon={logo} />
        <div className="resources-page">
          Aqui pondria el componente de recursos y página del Footer, Si tan solo tuviera uno :c
        </div>
        <div className="variable-link">
          Aqui pondria el componente de enlace variable, Si tan solo tuviera uno D:
        </div>
      </>
    ),
  },
};
