import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BadgeItem from './badges';

describe('BadgeItem Component', () => {
  it('renders with default props', () => {
    render(<BadgeItem text="Test Badge" />);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('renders avatar when showAvatar is true and avatarSrc is provided', () => {
    render(<BadgeItem text="Avatar Badge" avatarSrc="https://i.pravatar.cc/100" showAvatar />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://i.pravatar.cc/100');
  });

  it('renders countStart and countEnd when provided', () => {
    render(<BadgeItem text="Counts" countStart={5} countEnd={10} />);
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('calls onRemove when remove icon is clicked', () => {
    const handleRemove = vi.fn();
    render(<BadgeItem text="Removable" onRemove={handleRemove} />);
    const removeBtn = screen.getByLabelText('Remove badge');
    fireEvent.click(removeBtn);
    expect(handleRemove).toHaveBeenCalled();
  });

  it('applies bold text when bold is true', () => {
    render(<BadgeItem text="Bold Text" bold />);
    const text = screen.getByText('Bold Text');
    expect(text).toHaveStyle({ fontWeight: '700' });
  });
});
