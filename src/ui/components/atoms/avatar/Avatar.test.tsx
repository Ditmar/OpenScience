import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar Atom', () => {
  it('renders with image src and alt text', () => {
    render(<Avatar src="https://example.com/image.png" alt="Example avatar" />);
    const img = screen.getByRole('img', { name: 'Example avatar' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/image.png');
  });

  it('applies custom className', () => {
    const { container } = render(<Avatar src="avatar.jpg" className="custom-class" />);
    const avatarWrapper = container.firstChild as HTMLElement;
    expect(avatarWrapper).toHaveClass('custom-class');
  });
});
