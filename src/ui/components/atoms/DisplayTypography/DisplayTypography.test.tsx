import React from 'react';
import { render, screen } from '@testing-library/react';
import DisplayTypography from './DisplayTypography';

describe('DisplayTypography', () => {
  test('renders with default props', () => {
    render(<DisplayTypography text="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test.each([['display-xl'], ['display-lg']])(
    'applies size class %s',
    (size) => {
      render(<DisplayTypography text="Test" size={size as any} />);
      expect(screen.getByText('Test').className).toContain(size);
    }
  );

  test.each([['regular'], ['medium']])(
    'applies weight class %s',
    (weight) => {
      render(<DisplayTypography text="Test" weight={weight as any} />);
      expect(screen.getByText('Test').className).toContain(weight);
    }
  );

  test.each([['sans'], ['serif'], ['mono']])(
    'applies fontStyle class %s',
    (fontStyle) => {
      render(<DisplayTypography text="Test" fontStyle={fontStyle as any} />);
      expect(screen.getByText('Test').className).toContain(fontStyle);
    }
  );

  test('applies italic class if italic is true', () => {
    render(<DisplayTypography text="Test" italic />);
    expect(screen.getByText('Test').className).toContain('italic');
  });
});
