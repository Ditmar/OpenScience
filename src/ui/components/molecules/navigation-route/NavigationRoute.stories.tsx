import type { StoryObj, Meta } from '@storybook/react';
import NavigationRoute from './NavigationRoute';

const meta: Meta<typeof NavigationRoute> = {
  title: 'ui/components/molecules/navigation-route',
  component: NavigationRoute,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    volume: '1',
    date: 'ABRIL 16, 2023',
    color: 'primary',
    text: '',
  },
};

export const Secundary: Story = {
  args: {
    volume: '1',
    date: 'ABRIL 16, 2023',
    color: 'secondary',
    text: '',
  },
};

export const Tertiary: Story = {
  args: {
    volume: '1',
    date: 'ABRIL 16, 2023',
    color: 'tertiary',
    text: '',
  },
};
