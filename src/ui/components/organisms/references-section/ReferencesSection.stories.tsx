import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import React from 'react';

import ReferencesSection from './ReferencesSection';
import type { ReferenceItem } from './types/IProps';

const meta: Meta<typeof ReferencesSection> = {
  title: 'ui/components/organisms/references-section',
  component: ReferencesSection,
  argTypes: {
    references: { control: false },
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 2 }}>
        <Box sx={{ transform: 'scale(0.85)', transformOrigin: 'top left' }}>
          <Story />
        </Box>
      </Box>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const MOCKED_REFERENCES: ReferenceItem[] = [
  {
    text: 'A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022).',
  },
  {
    text: 'John Doe, A Study on React Components. Journal of Web Development, 12, 34-56 (2023).',
  },
  {
    text: 'Jane Smith, The Art of Atomic Design. Design Systems Monthly, 5(2), 110-125 (2021).',
  },
];

export const Default: Story = {
  args: {
    references: MOCKED_REFERENCES,
  },
};

export const SingleReference: Story = {
  args: {
    references: [MOCKED_REFERENCES[0]],
  },
};

export const Empty: Story = {
  args: {
    references: [],
  },
};
