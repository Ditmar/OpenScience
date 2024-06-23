import { render, screen } from '@testing-library/react';
import Share from './Share.tsx';

describe('OptionMenu Component', () => {
  test('should render Share', () => {
    render(<Share />);
    const iconbutton = screen.getByLabelText('Share');
    expect(iconbutton).toBeInTheDocument();
  });

  test('menu items should not be visible initially', () => {
    render(<Share />);
    expect(screen.queryByText('Whatsapp')).not.toBeInTheDocument();
    expect(screen.queryByText('Telegram')).not.toBeInTheDocument();
    expect(screen.queryByText('Facebook')).not.toBeInTheDocument();
  });
});
