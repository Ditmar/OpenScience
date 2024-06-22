import type { StoryObj, Meta } from '@storybook/react';
import ResourcesAndPageFooter from './ResourceAndPageFooter';
import Variables from '../../atoms/label-variables/Variables';

const meta: Meta<typeof ResourcesAndPageFooter> = {
  title: 'ui/components/molecules/resource-and-page-footer',
  component: ResourcesAndPageFooter,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    children: (
      <>
        <div
          className="resource-and-page-footer__section resources-and-page-footer__section--resources
          resources-and-page-footer__section--resources-desktop"
        >
          <Variables text="RECURSOS" />
          <Variables text="ARTÍCULOS" />
          <Variables text="VOLÚMENES" />
        </div>
        <div className="resource-and-page-footer__separator resources-and-page-footer__separator--desktop" />
        <div
          className="resource-and-page-footer__section resources-and-page-footer__section--page
          resources-and-page-footer__section--page-desktop"
        >
          <Variables text="PÁGINA" />
          <Variables text="UNIPOL.EDU.BO" href="https://www.unipol.edu.bo" />
        </div>
      </>
    ),
  },
};

export const Mobile: Story = {
  args: {
    children: (
      <>
        <div
          className="resource-and-page-footer__section resources-and-page-footer__section--resources
          resources-and-page-footer__section--resources-mobile"
        >
          <Variables text="RECURSOS" />
        </div>
        <div
          className="resource-and-page-footer__section resources-and-page-footer__section--page
          resources-and-page-footer__section--page-mobile"
        >
          <Variables text="PÁGINA" />
        </div>
        <div className="resource-and-page-footer__separator resources-and-page-footer__separator--mobile" />
        <div
          className="resource-and-page-footer__section resources-and-page-footer__section--articles
          resources-and-page-footer__section--articles-mobile"
        >
          <Variables text="ARTÍCULOS" />
          <Variables text="VOLÚMENES" />
        </div>
        <div
          className="resource-and-page-footer__section resources-and-page-footer__section--unipol
          resources-and-page-footer__section--unipol-mobile"
        >
          <Variables text="UNIPOL.EDU.BO" href="https://www.unipol.edu.bo" />
        </div>
      </>
    ),
  },
};
