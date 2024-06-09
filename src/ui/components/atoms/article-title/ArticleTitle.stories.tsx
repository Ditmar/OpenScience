import type { StoryObj, Meta } from '@storybook/react';
import '../../../../globals/_variables.scss';
import ArticleTitle from './ArticleTitle';

const meta = {
  title: 'ui/components/atoms/article-title',
  component: ArticleTitle,
  argTypes: {
    variant: {
      options: ['Default', 'primary', 'secondary'],
      control: { type: 'select' },
    },
    text: {
      action: 'text',
    },
  },
} as Meta<typeof ArticleTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Titulo1: Story = {
  args: {
    title: `CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION`,
    variant: 'default',
  },
};

export const Titulo2: Story = {
  args: {
    title: `CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION`,
    variant: 'primary',
  },
};
export const Titulo3: Story = {
  args: {
    title: `CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION`,
    variant: 'secondary',
  },
};
