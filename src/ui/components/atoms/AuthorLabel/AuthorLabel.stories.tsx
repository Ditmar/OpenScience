import type { StoryObj, Meta } from '@storybook/react';
import AuthorLabel from './AuthorLabel';


const meta: Meta<typeof AuthorLabel> = {
  title: 'ui/components/atoms/AuthorLabel',
  component: AuthorLabel,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;
const createStory = (author: string): Story => ({
  render: (args) => <AuthorLabel author={args.author} />,
  args: {
    author: author,
  },
});

export const Author1: Story = createStory('John Doe');
export const Author2: Story = createStory('Jane Smith');
