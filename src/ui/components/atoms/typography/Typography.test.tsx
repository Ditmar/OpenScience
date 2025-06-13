import { render, screen } from '@testing-library/react';
import Typography from './Typography';

describe('Typography Atom', () => {
  it('renders children text', () => {
    render(<Typography>Test Text</Typography>);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('applies correct variant and fontWeight class', () => {
    render(
      <Typography variant="h4" fontWeight="bold">
        Heading
      </Typography>,
    );
    const element = screen.getByText('Heading');
    expect(element.className).toMatch(/bold/);
  });

  it('applies custom color', () => {
    render(<Typography color="#123456">Colored Text</Typography>);
    const element = screen.getByText('Colored Text');
    expect(element).toHaveStyle({ color: '#123456' });
  });
});
