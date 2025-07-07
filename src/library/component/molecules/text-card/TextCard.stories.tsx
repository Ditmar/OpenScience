import React, { useState } from 'react';
import type { StoryObj } from '@storybook/react';
import TextCard from './TextCard';

const meta = {
  title: 'library/component/molecules/TextCard',
  component: TextCard,
};

export default meta;

type Story = StoryObj<typeof TextCard>;

const mapColorToPillColor = (
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
):
  | 'brand-primary'
  | 'brand-secondary'
  | 'feedback-positive'
  | 'feedback-warning'
  | 'feedback-negative' => {
  const map = {
    primary: 'brand-primary',
    secondary: 'brand-secondary',
    success: 'feedback-positive',
    warning: 'feedback-warning',
    danger: 'feedback-negative',
  };

  return map[color] as
    | 'brand-primary'
    | 'brand-secondary'
    | 'feedback-positive'
    | 'feedback-warning'
    | 'feedback-negative';
};

const createStory = (
  backgroundColor: 'primary' | 'secondary' | 'success' | 'warning' | 'danger',
): Story => ({
  render: () => {
    function InteractiveStory() {
      const [checked, setChecked] = useState(false);

      return (
        <TextCard
          checkProps={{
            checked,
            onChange: () => {
              setChecked(!checked);
            },
            disabled: false,
            name: `checkbox-${backgroundColor}`,
            value: backgroundColor,
          }}
          badgeProps={{
            backgroundColor,
            avatar: {
              src: 'https://via.placeholder.com/32',
              alt: 'User Avatar',
            },
            text: {
              content: 'badge text',
              color: 'light',
              fontWeight: 700,
            },
            pill: {
              text: '100',
              color: mapColorToPillColor(backgroundColor),
              variant: 'soft',
              rounded: 'r_md',
            },
            rounded: 'r_md',
          }}
          title="Harmonizing Human Experience: The Artistry of UI-UX Design"
          titleProps={{
            color: 'paragraph_dark',
            fontWeight: 700,
          }}
          description="UI is the canvas, UX the brushstroke; together, they
          craft an immersive journey where every pixel tells a story of elegance, 
          efficiency, and effortless delight. It's the artistry of design at its finest."
          descriptionProps={{
            color: 'icon_text',
          }}
        />
      );
    }

    return <InteractiveStory />;
  },
});

export const Primary = createStory('primary');
export const Secondary = createStory('secondary');
export const Success = createStory('success');
export const Warning = createStory('warning');
export const Danger = createStory('danger');

export const DisabledCheck: Story = {
  render: () => {
    function DisabledStory() {
      return (
        <TextCard
          checkProps={{
            checked: true,
            onChange: () => {},
            disabled: true,
            name: 'checkbox-disabled',
            value: 'disabled',
          }}
          badgeProps={{
            backgroundColor: 'secondary',
            avatar: {
              src: 'https://via.placeholder.com/32',
              alt: 'User Avatar',
            },
            text: {
              content: 'Jane Smith',
              color: 'light',
              fontWeight: 700,
            },
            pill: {
              text: '100',
              color: 'read-only-disabled',
              variant: 'soft',
              rounded: 'r_md',
            },
            rounded: 'r_md',
          }}
          title="TextCard - Check deshabilitado"
          titleProps={{
            color: 'paragraph_dark',
            fontWeight: 700,
          }}
          description="El checkbox está deshabilitado en este ejemplo."
          descriptionProps={{
            color: 'icon_text',
          }}
        />
      );
    }

    return <DisabledStory />;
  },
};
