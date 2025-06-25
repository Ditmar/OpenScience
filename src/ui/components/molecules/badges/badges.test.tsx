import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { AvatarBadgeItem } from './badges';

vi.mock('/src/assets/icons/circle-quarters.svg?react', () => ({
  default: () => <svg data-testid="circle-quarters-icon" />,
}));

vi.mock('@/components/ui/icons/delete-icon.svg?react', () => ({
  default: () => <button data-testid="delete-icon" aria-label="Eliminar" />,
}));

const defaultProps = {
  icon: 'circle-quarters',
  avatarUrl: 'https://i.pravatar.cc/150?img=1',
  onRemove: vi.fn(),
  label: 'Avatar badge item',
};

describe('AvatarBadgeItem', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it('renders without avatar', () => {
    render(<AvatarBadgeItem text="" avatarSrc={undefined} onRemove={defaultProps.onRemove} />);
    expect(screen.queryByAltText('Avatar')).not.toBeInTheDocument();
  });
});
