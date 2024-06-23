import type { StoryObj, Meta } from '@storybook/react';
import Footer from './Footer';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';
import logo from '../../../../assets/icons/logo.svg?raw';

const meta: Meta<typeof Footer> = {
  title: 'ui/components/molecules/footer',
  component: Footer,
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
