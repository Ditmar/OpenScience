import { render, screen } from '@testing-library/react';
import LabelResourcesPage from './LabelResourcesPage.tsx';

describe('LabelResourcesPage', () => {
  test('renders the text correctly', () => {
    render(<LabelResourcesPage text="RECURSOS" />);
    const labelText = screen.getByText('RECURSOS');
    expect(labelText).toBeInTheDocument();
  });

  test('applies the correct styles', () => {
    render(<LabelResourcesPage text="PAGINA" />);
    const labelText = screen.getByText('PAGINA');
    expect(labelText).toHaveClass('text');
  });
});
