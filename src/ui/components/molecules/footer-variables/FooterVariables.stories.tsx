import type { StoryObj, Meta } from '@storybook/react';
import FooterVariables from './FooterVariables';
import '../../../../globals/_variables.scss';

const meta: Meta<typeof FooterVariables> = {
  title: 'ui/components/molecules/footer-variables',
  component: FooterVariables,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
