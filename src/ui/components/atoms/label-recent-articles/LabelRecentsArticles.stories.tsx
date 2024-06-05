import type { StoryObj, Meta } from '@storybook/react';
import '../../../../globals/_variables.scss';
import {LabelRecentsArticles} from './LabelRecentsArticles';

const meta: Meta<typeof LabelRecentsArticles> = {
  title: 'ui/components/atoms/label-recents-articles',
  component: LabelRecentsArticles,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'ARTICULOS MAS RECIENTES',
    color: 'primary',
  },
};

export const Secundary: Story = {
  args: {
    text: 'ARTICULOS MAS RECIENTES',
    color: 'secondary',
  },
};