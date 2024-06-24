import type { StoryObj, Meta } from '@storybook/react';
import ResourcesAndPageFooter from './ResourceAndPageFooter';
import Variables from '../../atoms/label-variables/Variables';

const meta: Meta<typeof ResourcesAndPageFooter> = {
  title: 'ui/components/molecules/resource-and-page-footer',
  component: ResourcesAndPageFooter,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="resource-and-page-footer-lineone" />

        <div className="resource-and-page-footer-left">
          <div className="resource-and-page-footer-title">
            <Variables text="RECURSOS" />
          </div>
          <div className="resource-and-page-footer-content">
            <Variables text="ARTÍCULOS" />
            <Variables text="VOLÚMENES" />
          </div>
        </div>

        <div className="resource-and-page-footer-linetwo" />

        <div className="resource-and-page-footer-rigth">
          <div className="resource-and-page-footer-title">
            <Variables text="PAGINAS" />
          </div>
          <div className="resource-and-page-footer-content">
            <Variables text="UNIPOL.EDU.BO" href="https://www.unipol.edu.bo" />
          </div>
        </div>
      </>
    ),
  },
};

export const Colors: Story = {
  args: {
    children: (
      <>
        <div className="resource-and-page-footer-lineone" />

        <div className="resource-and-page-footer-left">
          <div className="resource-and-page-footer-title">
            <Variables text="RECURSOS" colorVariant="primary" />
          </div>
          <div className="resource-and-page-footer-content">
            <Variables text="ARTÍCULOS" colorVariant="secondary" />
            <Variables text="VOLÚMENES" colorVariant="secondary" />
          </div>
        </div>

        <div className="resource-and-page-footer-linetwo" />

        <div className="resource-and-page-footer-rigth">
          <div className="resource-and-page-footer-title">
            <Variables text="PAGINAS" colorVariant="primary" />
          </div>
          <div className="resource-and-page-footer-content">
            <Variables text="UNIPOL.EDU.BO" colorVariant="main" href="https://www.unipol.edu.bo" />
          </div>
        </div>
      </>
    ),
  },
};
