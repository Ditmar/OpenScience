import type { StoryObj, Meta } from '@storybook/react';
import YearList from './YearList';
import dataMock from './__mock__/datamock.json';

const meta: Meta<typeof YearList> = {
  title: 'ui/components/molecules/year-list',
  component: YearList,
};

export default meta;

type Story = StoryObj<typeof YearList>;

export const Default: Story = {
  args: {
    data: dataMock.data,
    buttonText: 'año',
  },
};
