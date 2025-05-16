import type { Meta, StoryObj } from '@storybook/react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconTextStat from './icon-text-stat';

const meta: Meta<typeof IconTextStat> = {
  title: 'library/components/atoms/icon-text-stat',
  component: IconTextStat,
};

export default meta;
type Story = StoryObj<typeof IconTextStat>;

export const Primary: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    variant: 'primary',
    size: 'small',
    border: 'sharp',
    icon: <HighlightOffIcon />,
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};

export const Secondary: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    variant: 'secondary',
    size: 'small',
    border: 'sharp',
    icon: <HighlightOffIcon />,
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};
export const Tertiary: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    variant: 'tertiary',
    size: 'small',
    border: 'sharp',
    icon: <HighlightOffIcon />,
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};
export const Success: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    variant: 'success',
    size: 'small',
    border: 'sharp',
    icon: <HighlightOffIcon />,
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};
export const Warning: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    variant: 'warning',
    size: 'small',
    border: 'sharp',
    icon: <HighlightOffIcon />,
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};
export const Error: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    variant: 'error',
    size: 'small',
    border: 'sharp',
    icon: <HighlightOffIcon />,
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};
export const Small: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    variant: 'primary',
    size: 'small',
    border: 'sharp',
    icon: <HighlightOffIcon />,
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};
export const Medium: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    variant: 'primary',
    size: 'medium',
    border: 'sharp',
    icon: <HighlightOffIcon />,
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};
export const Large: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    variant: 'primary',
    size: 'large',
    border: 'sharp',
    icon: <HighlightOffIcon />,
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};
export const Sharp: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    variant: 'primary',
    size: 'small',
    border: 'sharp',
    icon: <HighlightOffIcon />,
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};
export const Soft: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    variant: 'primary',
    size: 'small',
    border: 'soft',
    icon: <HighlightOffIcon />,
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};
export const SecondaryInformation: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    subValue: 'Secondary information.',
    variant: 'primary',
    size: 'small',
    border: 'sharp',
    icon: <HighlightOffIcon />,
    description: 'This is a description.',
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};
export const WithoutIcon: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    mainValue: `UI is the canvas, UX the brushstroke; together, they craft an immersive 
    journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    variant: 'primary',
    size: 'small',
    border: 'sharp',
    children: <input type="checkbox" aria-label="checkbox" />,
  },
};
