import type { Meta, StoryObj } from '@storybook/react';
import TextArrangement from './TextArrangement';
import styles from './TextArrangement.module.scss';

const meta: Meta<typeof TextArrangement> = {
  title: 'library/component/molecules/text-arrangement',
  component: TextArrangement,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextArrangement>;

const sampleTitle = 'Harmonizing Human Experience: The Artistry of UI-UX Design';
const sampleText = `UI is the canvas, UX the brushstroke; together, they craft an immersive journey where
every pixel tells a story of elegance, efficiency, and effortless delight. It’s the artistry of design at its finest.`;

export const Default: Story = {
  args: {
    showBadge: false,
    responsive: false,
    content: {
      title: sampleTitle,
      text: sampleText,
    },
    titleSize: 'xs',
    contentSize: 'xs',
  },
};

export const WithBadge: Story = {
  args: {
    content: {
      title: sampleTitle,
      text: sampleText,
    },
    titleSize: 'xs',
    contentSize: 'xs',
    showBadge: true,
    responsive: true,
  },
};

export const ShortText: Story = {
  args: {
    showBadge: false,
    responsive: true,
    content: {
      title: 'This is a short title',
      text: 'This represents short content.',
    },
    titleSize: 'md',
    contentSize: 'md',
  },
};

export const LongText: Story = {
  args: {
    showBadge: false,
    responsive: true,
    content: {
      title: 'Very long title that takes up several lines and keeps growing to test the wrap',
      text: `This is a very long text that should span multiple lines and demonstrate that the component 
      scales correctly to different amounts of text without breaking the component's design or layout.`,
    },
    titleSize: 'sm',
    contentSize: 'sm',
  },
};

export const ShowCase: Story = {
  render: () => (
    <div className={styles['show-case-container']}>
      <div className={styles['show-case-left']}>
        <TextArrangement
          showBadge={false}
          content={{
            title: sampleTitle,
            text: sampleText,
          }}
          titleSize="lg"
          contentSize="md"
          layout="featured"
          alignment="left"
          responsive
        />
      </div>
      <div className={styles['show-case-right']}>
        <TextArrangement
          showBadge={false}
          content={{
            title: sampleTitle,
            text: sampleText,
          }}
          titleSize="sm"
          contentSize="md"
          layout="cards"
          alignment="left"
          responsive
        />
        <TextArrangement
          showBadge
          content={{
            title: sampleTitle,
            text: sampleText,
          }}
          titleSize="xs"
          contentSize="sm"
          layout="cards"
          alignment="left"
          responsive
        />
        <TextArrangement
          showBadge={false}
          content={{
            title: sampleTitle,
            text: sampleText,
          }}
          titleSize="xs"
          contentSize="sm"
          layout="cards"
          alignment="left"
          responsive
        />
        <TextArrangement
          showBadge={false}
          content={{
            title: sampleTitle,
            text: sampleText,
          }}
          titleSize="xs"
          contentSize="sm"
          layout="cards"
          alignment="left"
          responsive
        />
      </div>
    </div>
  ),
};
