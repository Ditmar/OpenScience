import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import TextCardList from './TextCardList';
import type { TextCardListProps } from './Types/IProps';

const meta: Meta<typeof TextCardList> = {
  title: 'library/component/Organisms/TextCardList',
  component: TextCardList,
};

export default meta;

type Story = StoryObj<typeof TextCardList>;

const items: TextCardListProps['items'] = [
  {
    id: '1',
    size: 'md',
    rounded: 'r_md',
    checkProps: {
      checked: false,
      disabled: false,
      name: 'check-1',
      value: '1',
    },
    badgeProps: {
      backgroundColor: 'primary',
      avatar: {
        src: 'https://i.pravatar.cc/32?img=1',
        alt: 'Avatar 1',
      },
      text: {
        content: 'Usuario 1',
        color: 'light',
        fontWeight: 700,
      },
      pill: {
        text: '100',
        color: 'brand-primary',
        variant: 'soft',
        rounded: 'r_md',
      },
      rounded: 'r_md',
      size: 'md',
    },
    title: 'Diseño centrado en el usuario',
    titleProps: {
      color: 'paragraph_dark',
      fontWeight: 700,
    },
    description: 'El diseño UI/UX crea experiencias memorables y eficientes.',
    descriptionProps: {
      color: 'icon_text',
    },
  },
  {
    id: '2',
    size: 'md',
    rounded: 'r_md',
    checkProps: {
      checked: false,
      disabled: false,
      name: 'check-2',
      value: '2',
    },
    badgeProps: {
      backgroundColor: 'warning',
      avatar: {
        src: 'https://i.pravatar.cc/32?img=2',
        alt: 'Avatar 2',
      },
      text: {
        content: 'Usuario 2',
        color: 'light',
        fontWeight: 700,
      },
      pill: {
        text: '99',
        color: 'feedback-warning',
        variant: 'soft',
        rounded: 'r_md',
      },
      rounded: 'r_md',
      size: 'md',
    },
    title: 'Accesibilidad primero',
    titleProps: {
      color: 'paragraph_dark',
      fontWeight: 700,
    },
    description: 'Interfaces accesibles mejoran la inclusión digital.',
    descriptionProps: {
      color: 'icon_text',
    },
  },
];

function InteractiveTextCardListStory() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSelect = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <TextCardList items={items} selectedIds={selectedIds} onSelect={handleSelect} columns={2} />
  );
}

export const Default: Story = {
  render: () => <InteractiveTextCardListStory />,
};
