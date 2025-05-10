import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading Component', () => {
  it('renders an h1 with regular weight and sans style by default', () => {
    render(<Heading>Test Heading</Heading>);
    const heading = screen.getByText('Test Heading');
    expect(heading.tagName).toBe('H1');
    expect(heading.className).toContain('regular'); // Verifica que la clase generada contenga "regular"
    expect(heading.className).toContain('sans'); // Verifica que la clase generada contenga "sans"
  });

  it('renders an h2 with medium weight and serif style', () => {
    render(
      <Heading level="h2" weight="medium" style="serif">
        Test Heading
      </Heading>,
    );
    const heading = screen.getByText('Test Heading');
    expect(heading.tagName).toBe('H2');
    expect(heading.className).toContain('medium'); // Verifica que la clase generada contenga "medium"
    expect(heading.className).toContain('serif'); // Verifica que la clase generada contenga "serif"
  });

  it('renders an h3 with semibold weight and italic style', () => {
    render(
      <Heading level="h3" weight="semibold" style="italic">
        Test Heading
      </Heading>,
    );
    const heading = screen.getByText('Test Heading');
    expect(heading.tagName).toBe('H3');
    expect(heading.className).toContain('semibold'); // Verifica que la clase generada contenga "semibold"
    expect(heading.className).toContain('italic'); // Verifica que la clase generada contenga "italic"
  });
});
