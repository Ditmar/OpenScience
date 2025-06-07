import type { Meta, StoryObj } from '@storybook/react';
import TitleSubtitle from './TitleSubtitle';
import type { IProps } from './types/IProps';

const meta: Meta<IProps> = {
  title: 'ui/components/atoms/TitleSubtitle',
  component: TitleSubtitle,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Main title content',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle content',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant for different contexts',
    },
    alignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    variant: {
      control: 'select',
      options: ['default', 'emphasized', 'minimal'],
      description: 'Visual style variant',
    },
    titleTag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      description: 'HTML semantic tag for title',
    },
    subtitleTag: {
      control: 'select',
      options: ['p', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML semantic tag for subtitle',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;

type Story = StoryObj<IProps>;

export const Default: Story = {
  args: {
    title: 'Welcome to OpenScience',
    subtitle: 'Discover the latest research and scientific breakthroughs from around the world',
    size: 'md',
    alignment: 'center',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p',
  },
};

export const SmallSize: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle:
      'UI is the canvas, UX the brushstroke; together, they craft an immersive journey ' +
      'where every pixel tells a story of elegance, efficiency, and effortless delight. ' +
      'It is the artistry of design at its finest.',
    size: 'sm',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h3',
    subtitleTag: 'p',
  },
};

export const MediumSize: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle:
      'UI is the canvas, UX the brushstroke; together, they craft an immersive journey ' +
      'where every pixel tells a story of elegance, efficiency, and effortless delight. ' +
      'It is the artistry of design at its finest.',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p',
  },
};

export const LargeSize: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle:
      'UI is the canvas, UX the brushstroke; together, they craft an immersive journey ' +
      'where every pixel tells a story of elegance, efficiency, and effortless delight. ' +
      'It is the artistry of design at its finest.',
    size: 'lg',
    alignment: 'center',
    variant: 'default',
    titleTag: 'h1',
    subtitleTag: 'p',
  },
};

export const LeftAligned: Story = {
  args: {
    title: 'Research Dashboard',
    subtitle: 'Manage your research projects and collaborations',
    size: 'md',
    alignment: 'left',
    variant: 'default',
  },
};

export const CenterAligned: Story = {
  args: {
    title: 'Scientific Community',
    subtitle: 'Connect with researchers worldwide',
    size: 'md',
    alignment: 'center',
    variant: 'default',
  },
};

export const RightAligned: Story = {
  args: {
    title: 'Data Analytics',
    subtitle: 'Analyze your research data with advanced tools',
    size: 'md',
    alignment: 'right',
    variant: 'default',
  },
};

export const DefaultVariant: Story = {
  args: {
    title: 'Standard Title',
    subtitle: 'This is the default styling for title and subtitle',
    size: 'md',
    alignment: 'left',
    variant: 'default',
  },
};

export const EmphasizedVariant: Story = {
  args: {
    title: 'Important Announcement',
    subtitle: 'This content requires special attention',
    size: 'md',
    alignment: 'left',
    variant: 'emphasized',
  },
};

export const MinimalVariant: Story = {
  args: {
    title: 'Subtle Section',
    subtitle: 'For less prominent content areas',
    size: 'md',
    alignment: 'left',
    variant: 'minimal',
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: 'Standalone Title',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Title with Description',
    subtitle: 'This subtitle provides additional context and information',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p',
  },
};

export const SemanticVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <TitleSubtitle
        title="H1 Title with P Subtitle"
        subtitle="Paragraph subtitle for main page heading"
        titleTag="h1"
        subtitleTag="p"
        size="lg"
      />
      <TitleSubtitle
        title="H2 Title with H4 Subtitle"
        subtitle="H4 subtitle for section heading"
        titleTag="h2"
        subtitleTag="h4"
        size="md"
      />
      <TitleSubtitle
        title="H3 Title with H5 Subtitle"
        subtitle="H5 subtitle for subsection"
        titleTag="h3"
        subtitleTag="h5"
        size="sm"
      />
    </div>
  ),
};

export const HeroSection: Story = {
  args: {
    title: 'Revolutionizing Scientific Research',
    subtitle:
      'Join thousands of researchers sharing knowledge and advancing science through our open platform',
    size: 'lg',
    alignment: 'center',
    variant: 'emphasized',
    titleTag: 'h1',
    subtitleTag: 'p',
  },
};

export const CardHeader: Story = {
  args: {
    title: 'Recent Papers',
    subtitle: 'Latest submissions this week',
    size: 'sm',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h3',
    subtitleTag: 'p',
  },
};

export const SectionDivider: Story = {
  args: {
    title: 'Featured Research',
    subtitle: 'Highlighted publications from our community',
    size: 'md',
    alignment: 'center',
    variant: 'minimal',
    titleTag: 'h2',
    subtitleTag: 'p',
  },
};