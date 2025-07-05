import type { StoryObj, Meta } from '@storybook/react';
import React, { useState } from 'react';
import UserTextCard from './user-text-card';

const meta = {
  component: UserTextCard,
  title: 'ui/components/molecules/user-text-card',
  argTypes: {
    onClick: { action: 'click' },
    onCheckChange: { action: 'checkboxChanged' },
  },
} as Meta<typeof UserTextCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: (args) => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return (
        <UserTextCard
          avatar={args.avatar}
          userName={args.userName}
          userHandle={args.userHandle}
          content={args.content}
          timestamp={args.timestamp}
          isVerified={args.isVerified}
          actions={args.actions}
          isChecked={args.isChecked || checked}
          onClick={args.onClick}
          onCheckChange={(newVal) => {
            setChecked(newVal);
            args.onCheckChange?.(newVal);
          }}
          colorVariant="default"
        />
      );
    }

    return <WrapperComponent />;
  },
  args: {
    avatar: 'https://i.pravatar.cc/40?img=2',
    userName: 'Christeen Lee',
    userHandle: 'christeen',
    content:
      'UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells',
    timestamp: '2 mins ago',
    isChecked: false,
    isVerified: true,
    onClick: () => {},
    variant: 'default',
  },
};

export const Compact: Story = {
  render: (args) => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return (
        <UserTextCard
          avatar={args.avatar}
          userName={args.userName}
          userHandle={args.userHandle}
          content={args.content}
          timestamp={args.timestamp}
          isVerified={args.isVerified}
          actions={args.actions}
          isChecked={checked}
          onClick={args.onClick}
          variant={args.variant}
          colorVariant={args.colorVariant}
          onCheckChange={(newVal) => {
            setChecked(newVal);
            args.onCheckChange?.(newVal);
          }}
        />
      );
    }

    return <WrapperComponent />;
  },
  args: {
    userName: 'Christeen Lee',
    userHandle: 'christeen',
    content: 'UI is the canvas, UX the brushstroke...',
    timestamp: '2 mins ago',
    isVerified: true,
    onClick: () => {},
    variant: 'compact',
  },
};

export const Expanded: Story = {
  render: (args) => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return (
        <UserTextCard
          avatar={args.avatar}
          userName={args.userName}
          userHandle={args.userHandle}
          content={args.content}
          timestamp={args.timestamp}
          isVerified={args.isVerified}
          actions={args.actions}
          isChecked={checked}
          onClick={args.onClick}
          variant={args.variant}
          colorVariant={args.colorVariant}
          onCheckChange={(newVal) => {
            setChecked(newVal);
            args.onCheckChange?.(newVal);
          }}
        />
      );
    }

    return <WrapperComponent />;
  },
  args: {
    avatar: 'https://i.pravatar.cc/40?img=2',
    userName: 'Christeen Lee',
    userHandle: 'christeen',
    content: 'UI is the canvas, UX the brushstroke...',
    timestamp: '2 mins ago',
    isVerified: true,
    onClick: () => {},
    variant: 'expanded',
  },
};

export const Info: Story = {
  render: (args) => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return (
        <UserTextCard
          avatar={args.avatar}
          userName={args.userName}
          userHandle={args.userHandle}
          content={args.content}
          timestamp={args.timestamp}
          isVerified={args.isVerified}
          actions={args.actions}
          isChecked={checked}
          onClick={args.onClick}
          variant={args.variant}
          colorVariant={args.colorVariant}
          onCheckChange={(newVal) => {
            setChecked(newVal);
            args.onCheckChange?.(newVal);
          }}
        />
      );
    }

    return <WrapperComponent />;
  },
  args: {
    avatar: 'https://i.pravatar.cc/40?img=2',
    userName: 'Christeen Lee',
    userHandle: 'christeen',
    content: 'UI is the canvas, UX the brushstroke...',
    timestamp: '2 mins ago',
    isVerified: true,
    onClick: () => {},
    colorVariant: 'info',
    variant: 'default',
  },
};

export const Warning: Story = {
  render: (args) => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return (
        <UserTextCard
          avatar={args.avatar}
          userName={args.userName}
          userHandle={args.userHandle}
          content={args.content}
          timestamp={args.timestamp}
          isVerified={args.isVerified}
          actions={args.actions}
          isChecked={checked}
          onClick={args.onClick}
          variant={args.variant}
          colorVariant={args.colorVariant}
          onCheckChange={(newVal) => {
            setChecked(newVal);
            args.onCheckChange?.(newVal);
          }}
        />
      );
    }

    return <WrapperComponent />;
  },
  args: {
    avatar: 'https://i.pravatar.cc/40?img=2',
    userName: 'Christeen Lee',
    userHandle: 'christeen',
    content: 'UI is the canvas, UX the brushstroke...',
    timestamp: '2 mins ago',
    isVerified: true,
    onClick: () => {},
    colorVariant: 'warning',
    variant: 'default',
  },
};
export const Success: Story = {
  render: (args) => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return (
        <UserTextCard
          avatar={args.avatar}
          userName={args.userName}
          userHandle={args.userHandle}
          content={args.content}
          timestamp={args.timestamp}
          isVerified={args.isVerified}
          actions={args.actions}
          isChecked={checked}
          onClick={args.onClick}
          variant={args.variant}
          colorVariant={args.colorVariant}
          onCheckChange={(newVal) => {
            setChecked(newVal);
            args.onCheckChange?.(newVal);
          }}
        />
      );
    }

    return <WrapperComponent />;
  },
  args: {
    avatar: 'https://i.pravatar.cc/40?img=2',
    userName: 'Christeen Lee',
    userHandle: 'christeen',
    content: 'UI is the canvas, UX the brushstroke...',
    timestamp: '2 mins ago',
    isVerified: true,
    onClick: () => {},
    colorVariant: 'success',
    variant: 'default',
  },
};
export const Error: Story = {
  render: (args) => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return (
        <UserTextCard
          avatar={args.avatar}
          userName={args.userName}
          userHandle={args.userHandle}
          content={args.content}
          timestamp={args.timestamp}
          isVerified={args.isVerified}
          actions={args.actions}
          isChecked={checked}
          onClick={args.onClick}
          variant={args.variant}
          colorVariant={args.colorVariant}
          onCheckChange={(newVal) => {
            setChecked(newVal);
            args.onCheckChange?.(newVal);
          }}
        />
      );
    }

    return <WrapperComponent />;
  },
  args: {
    avatar: 'https://i.pravatar.cc/40?img=2',
    userName: 'Christeen Lee',
    userHandle: 'christeen',
    content: 'UI is the canvas, UX the brushstroke...',
    timestamp: '2 mins ago',
    isVerified: true,
    onClick: () => {},
    colorVariant: 'error',
    variant: 'default',
  },
};
