import type { StoryObj, Meta } from '@storybook/react';
import YearFilter from './YearFilter';
import type { YearFilterProps } from './YearFilter';
import { years as mockYears } from './__mock__/mockData';

export default {
  title: 'ui/components/molecules/year-filter',
  component: YearFilter,
} as Meta<YearFilterProps>;

const Template: StoryObj<YearFilterProps> = {
  render: ({ years, onYearSelect }) => <YearFilter years={years} onYearSelect={onYearSelect} />,
};

export const Default: StoryObj<YearFilterProps> = {
  ...Template,
  args: {
    years: mockYears,
    onYearSelect: (year) => {
      console.log(`Selected Year: ${String(year)}`);
    },
  },
};
