import { render, screen } from '@testing-library/react';
import LabelRef from './LabelRef';

describe('Testing LabelRef React Component', () => {
  test('should render with default text', () => {
    render(<LabelRef variant="default">REFERENCIAS</LabelRef>);
    const labelElement = screen.getByText(/REFERENCIAS/i);
    expect(labelElement).toBeInTheDocument();
  });
});
