import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextCardStat from './TextCardStat';

const meta: Meta<typeof TextCardStat> = {
  title: 'Organisms/TextCardStat',
  component: TextCardStat,
  tags: ['autodocs'],
  args: {
    label: 'Users',
    title: 'User Statistics',
    description: 'Detailed stats',
    badgeColor: '#1976d2',
    badgeNumber: 42,
    size: 'medium',
    isDisabled: false,
    elevation: 1,
  },
};

export default meta;
type Story = StoryObj<typeof TextCardStat>;

export const Default: Story = {};

export const WithAvatar: Story = {
  args: {
    badgeAvatarUrl: 'https://example.com/avatar.png',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Clickable: Story = {
  args: {
    onClick: () => {
      alert('Card clicked');
    },
  },
};

export const InteractiveCheckbox: Story = {
  render: function InteractiveCheckboxRender(args) {
    const [checked, setChecked] = useState(false);

    const {
      label,
      badgeColor,
      badgeNumber,
      badgeAvatarUrl,
      badgeAvatarAlt,
      title,
      description,
      variant,
      size,
      onClick,
      elevation,
      isDisabled,
      className,
    } = args;

    return (
      <TextCardStat
        label={label}
        badgeColor={badgeColor}
        badgeNumber={badgeNumber}
        badgeAvatarUrl={badgeAvatarUrl}
        badgeAvatarAlt={badgeAvatarAlt}
        title={title}
        description={description}
        variant={variant}
        size={size}
        onClick={onClick}
        elevation={elevation}
        isDisabled={isDisabled}
        className={className}
        checked={checked}
        onCheckedChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
    );
  },
};
