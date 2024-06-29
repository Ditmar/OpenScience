import { render, screen } from '@testing-library/react';
import OptionMenu from './OptionMenu';

describe('OptionMenu Component', () => {
  test('should render ButtonBurger', () => {
    render(<OptionMenu />);
    const burgerButton = screen.getByLabelText('Menu');
    expect(burgerButton).toBeInTheDocument();
  });

  test('menu items should not be visible initially', () => {
    render(<OptionMenu />);
    expect(screen.queryByText('Pdf')).not.toBeInTheDocument();
    expect(screen.queryByText('Share')).not.toBeInTheDocument();
    expect(screen.queryByText('Media')).not.toBeInTheDocument();
    expect(screen.queryByText('Reference')).not.toBeInTheDocument();
  });
});
