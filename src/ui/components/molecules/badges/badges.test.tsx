import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { AvatarBadgeItem } from './badges';

// Mock del ícono de badge
vi.mock('/src/assets/icons/circle-quarters.svg?react', () => ({
  default: () => <svg data-testid="circle-quarters-icon" />,
}));

// Mock del ícono de eliminar si se usa un SVG o ícono de librería
vi.mock('@/components/ui/icons/delete-icon.svg?react', () => ({
  default: () => <button data-testid="delete-icon" aria-label="Eliminar" />,
}));

// Props base
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

  it('renders the circle quarters icon', () => {
    render(
      <AvatarBadgeItem
        text=""
        avatarSrc={defaultProps.avatarUrl}
        onRemove={defaultProps.onRemove}
      />,
    );
    expect(screen.getByTestId('circle-quarters-icon')).toBeInTheDocument();
  });

  it('renders without avatar', () => {
    render(<AvatarBadgeItem text="" avatarSrc={undefined} onRemove={defaultProps.onRemove} />);
    expect(screen.queryByAltText('Avatar')).not.toBeInTheDocument();
  });
});
