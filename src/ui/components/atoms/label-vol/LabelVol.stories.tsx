import type { StoryObj, Meta } from '@storybook/react';
import Volumen from './LabelVol';

const meta: Meta<typeof Volumen> = {
  title: 'ui/components/atoms/volumen-id',
  component: Volumen,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;
const createStory = (id: number, synonym: string): Story => ({
  render: (args) => <Volumen volumen={args.volumen} id={args.id} />,
  args: {
    volumen: synonym,
    id,
  },
});

export const Vol1 = createStory(1, 'Vol.');
export const Vol2 = createStory(2, 'Tome.');
export const Vol3 = createStory(3, 'Part.');
