import type { Meta, StoryObj } from '@storybook/react';
import { DemoBranchStory } from './demo-branch-story';

const meta: Meta<typeof DemoBranchStory> = {
  title: 'Organisms/DemoBranchStory',
  component: DemoBranchStory,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithTheme: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};
