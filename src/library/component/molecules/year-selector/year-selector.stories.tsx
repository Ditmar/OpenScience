import type { StoryObj, Meta } from '@storybook/react';
import YearSelector from './year-selector';
import Rectangle12 from '../../../../ui/components/atoms/hero-banner/__mock__/imgs/Rectangle12.png';
import dataMock from './__mock__/datamock.json';

const meta: Meta<typeof YearSelector> = {
  title: 'library/component/molecules/year-selector',
  component: YearSelector,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof YearSelector>;

export const Default: Story = {
  args: {
    data: dataMock.data,
    initialYear: 'AÑO',
    backgroundImage: String(Rectangle12),
  },
};
