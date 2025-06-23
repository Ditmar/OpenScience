import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import ThemeWrapper from '../../../../style-library/core/ThemeProvider';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Atoms/Label',
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Website Address',
    iconName: 'fi-sr-globe',
  },
};

export const WithHtmlFor: Story = {
  args: {
    htmlFor: 'username-input',
    iconName: 'fi-sr-globe',
  },
};
