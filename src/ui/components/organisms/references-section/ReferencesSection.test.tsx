import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import ReferencesSection from './ReferencesSection';
import type { ReferenceItem } from './types/IProps';

const MOCKED_REFERENCES: ReferenceItem[] = [
  {
    text: '1. A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022).',
  },
  {
    text: '2. John Doe, A Study on React Components. Journal of Web Development, 12, 34-56 (2023).',
  },
];

describe('ReferencesSection', () => {
  it('should render the main title', () => {
    render(<ReferencesSection references={MOCKED_REFERENCES} />);
    const titleElement = screen.getByText('REFERENCIAS');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the correct number of reference items', () => {
    render(<ReferencesSection references={MOCKED_REFERENCES} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(MOCKED_REFERENCES.length);
  });

  it('should render the text for each reference', () => {
    render(<ReferencesSection references={MOCKED_REFERENCES} />);
    MOCKED_REFERENCES.forEach((reference) => {
      const referenceText = screen.getByText(reference.text);
      expect(referenceText).toBeInTheDocument();
    });
  });
});
