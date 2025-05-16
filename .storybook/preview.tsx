import type { Preview } from '@storybook/react';
import ThemeProvider from '../src/style-library/core/ThemeProvider';

const previewDecorator = (Story, context) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [previewDecorator];
