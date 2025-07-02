import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import type { StoryFn } from '@storybook/react';
import { lightTheme } from '../../../../style-library/themes/default';
import TextCard from './TextCard';
import type { TextCardProps } from './types/IProps';

export default {
  title: 'Molecules/TextCard',
  component: TextCard,
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: 'radio',
      options: ['r_none', 'r_md', 'r_full'],
    },
  },
};

function Template({
  size,
  rounded,
  checkProps,
  badgeProps,
  title,
  titleProps,
  description,
  descriptionProps,
}: TextCardProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <TextCard
        size={size}
        rounded={rounded}
        checkProps={checkProps}
        badgeProps={badgeProps}
        title={title}
        titleProps={titleProps}
        description={description}
        descriptionProps={descriptionProps}
      />
    </ThemeProvider>
  );
}

const TemplateStory: StoryFn<TextCardProps> = Template;

const baseArgs: Omit<TextCardProps, 'size' | 'rounded'> = {
  checkProps: {
    checked: true,
    onChange: () => {},
    variant: 'brand-primary',
    name: 'checkbox-textcard',
    value: 'card-1',
  },
  badgeProps: {
    size: 'md',
    rounded: 'r_md',
    backgroundColor: 'primary',
    avatar: {
      src: 'https://via.placeholder.com/50',
      alt: 'Avatar',
    },
    text: {
      content: 'Badge Text',
      color: 'paragraph_dark',
      fontWeight: 600,
    },
    pill: {
      text: '100',
      color: 'brand-primary',
      variant: 'filled',
      rounded: 'r_md',
    },
  },
  title: 'Título Principal',
  titleProps: {
    color: 'paragraph_dark',
    fontWeight: 700,
    align: 'center',
    gutterBottom: true,
  },
  description: 'Esta es una descripción del TextCard.',
  descriptionProps: {
    color: 'icon_text',
    fontWeight: 400,
    align: 'center',
  },
};

export const Default = TemplateStory.bind({});
Default.args = {
  ...baseArgs,
  size: 'md',
  rounded: 'r_md',
};

export const Small = TemplateStory.bind({});
Small.args = {
  ...baseArgs,
  size: 'sm',
  rounded: 'r_md',
};

export const Large = TemplateStory.bind({});
Large.args = {
  ...baseArgs,
  size: 'lg',
  rounded: 'r_md',
};

export const Rounded = TemplateStory.bind({});
Rounded.args = {
  ...baseArgs,
  size: 'md',
  rounded: 'r_full',
};

export const Square = TemplateStory.bind({});
Square.args = {
  ...baseArgs,
  size: 'md',
  rounded: 'r_none',
};

export const Disabled = TemplateStory.bind({});
Disabled.args = {
  ...baseArgs,
  checkProps: {
    ...baseArgs.checkProps,
    disabled: true,
  },
  badgeProps: {
    ...baseArgs.badgeProps,
    pill: {
      ...baseArgs.badgeProps.pill,
      text: 'Deshabilitado',
      color: 'brand-secondary',
    },
  },
  title: 'Tarjeta Deshabilitada',
  description: 'Este texto está asociado a un componente inactivo.',
  size: 'md',
  rounded: 'r_md',
};
