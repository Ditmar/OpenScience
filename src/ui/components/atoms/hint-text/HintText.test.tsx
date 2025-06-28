import { render, screen } from '@testing-library/react';
import HintText from './HintText';

describe('Testing HintText React Component', () => {
  test('renders the text and two icons', () => {
    render(<HintText text="Prueba Hint" size="small" />);

    expect(screen.getByText('Prueba Hint')).toBeInTheDocument();

    const leftIcon = screen.getByTestId('hint-icon-left');
    const rightIcon = screen.getByTestId('hint-icon-right');

    expect(leftIcon).toBeInTheDocument();
    expect(rightIcon).toBeInTheDocument();
  });
});
