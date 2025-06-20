import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SubTitleAndParagraph from './SubTitleAndParagraph';

const theme = createTheme();

describe('SubTitleAndParagraph', () => {
  test('renders title and subtitle with default props', () => {
    render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="My Title" subtitle="My Subtitle" />
      </ThemeProvider>,
    );

    expect(screen.getByText('My Title')).toBeInTheDocument();
    expect(screen.getByText('My Subtitle')).toBeInTheDocument();
    expect(screen.getByText('My Title').tagName).toBe('H3');
    expect(screen.getByText('My Subtitle').tagName).toBe('P');
  });

  test('renders only title when subtitle is not provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="Title Only" />
      </ThemeProvider>,
    );

    expect(screen.getByText('Title Only')).toBeInTheDocument();
    expect(screen.queryByText('My Subtitle')).not.toBeInTheDocument();
  });

  test('applies different sizes (sm, lg) correctly', () => {
    // Small size
    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="Small Title" subtitle="Small Subtitle" size="sm" />
      </ThemeProvider>,
    );
    expect(screen.getByText('Small Title')).toBeInTheDocument();
    expect(screen.getByText('Small Subtitle')).toBeInTheDocument();
    rerender(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="Large Title" subtitle="Large Subtitle" size="lg" />
      </ThemeProvider>,
    );
    expect(screen.getByText('Large Title')).toBeInTheDocument();
    expect(screen.getByText('Large Subtitle')).toBeInTheDocument();
  });

  test('applies alignment correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="Centered Title" alignment="center" />
      </ThemeProvider>,
    );
    const titleElement = screen.getByText('Centered Title').closest('div');
    expect(titleElement).toHaveStyle('text-align: center');
  });

  test('applies emphasized variant correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="Emphasized Title" variant="emphasized" />
      </ThemeProvider>,
    );
    const titleElement = screen.getByText('Emphasized Title');
    expect(titleElement).toHaveStyle('font-weight: 700');
  });

  test('uses correct semantic HTML tags', () => {
    render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph
          title="My Title"
          subtitle="My Subtitle"
          titleTag="h1"
          subtitleTag="h6"
        />
      </ThemeProvider>,
    );
    expect(screen.getByText('My Title').tagName).toBe('H1');
    expect(screen.getByText('My Subtitle').tagName).toBe('H6');
  });

  test('applies additional className', () => {
    render(
      <ThemeProvider theme={theme}>
        <SubTitleAndParagraph title="Test" className="custom-class" />
      </ThemeProvider>,
    );
    expect(screen.getByText('Test').closest('div')).toHaveClass('custom-class');
  });
});
