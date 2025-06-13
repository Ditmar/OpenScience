import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge Molecule', () => {
  test('renders badge text and number', () => {
    render(<Badge text="Users" number={10} />);
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('renders avatar when avatarUrl is provided', () => {
    render(<Badge text="Users" number={10} avatarUrl="https://example.com/avatar.png" />);
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.png');
  });

  test('does not render avatar when avatarUrl is not provided', () => {
    render(<Badge text="Users" number={10} />);
    const avatar = screen.queryByRole('img');
    expect(avatar).not.toBeInTheDocument();
  });
});
