import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import UserTextCard from './user-text-card';

// Mock avatar para usar en las pruebas
const mockAvatar = 'https://example.com/avatar.jpg';

describe('UserTextCard Component', () => {
  // Test 1: Renderizado básico con props requeridas
  test('renders with required props', () => {
    render(<UserTextCard avatar={mockAvatar} userName="Test User" content="Test content" />);

    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockAvatar);
  });

  // Test 2: Renderizado completo con todas las props
  test('renders with all props', () => {
    render(
      <UserTextCard
        avatar={mockAvatar}
        userName="Test User"
        userHandle="testuser"
        content="Test content"
        timestamp="2 mins ago"
        isVerified
        variant="default"
      />,
    );

    expect(screen.getByText('@testuser')).toBeInTheDocument();
    expect(screen.getByText('2 mins ago')).toBeInTheDocument();
    expect(screen.getByText('✔️')).toBeInTheDocument();
  });

  // Test 3: Comportamiento del checkbox
  test('handles checkbox change', () => {
    const handleCheckChange = vi.fn();

    render(
      <UserTextCard
        avatar={mockAvatar}
        userName="Test User"
        content="Test content"
        isChecked={false}
        onCheckChange={handleCheckChange}
      />,
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleCheckChange).toHaveBeenCalledWith(true);
  });

  // Test 4: Variante compacta
  test('hides avatar in compact variant when not provided', () => {
    const { container } = render(
      <UserTextCard
        avatar={mockAvatar}
        userName="Test User"
        content="Test content"
        variant="compact"
      />,
    );

    // Verificamos que el avatar no se muestra aunque esté en props
    expect(container.querySelector('.avatar')).toBeNull();
  });

  // Test 5: Variante expanded con acciones
  test('shows actions in expanded variant', () => {
    const mockAction = vi.fn();

    render(
      <UserTextCard
        avatar={mockAvatar}
        userName="Test User"
        content="Test content"
        variant="expanded"
        actions={[
          { label: 'Action 1', onClick: mockAction },
          { label: 'Action 2', onClick: () => {} },
        ]}
      />,
    );

    fireEvent.click(screen.getByText('Action 1'));
    expect(mockAction).toHaveBeenCalledTimes(1);
  });

  // Test 6: Verificación de usuario
  test('shows verification badge when isVerified is true', () => {
    render(
      <UserTextCard avatar={mockAvatar} userName="Test User" content="Test content" isVerified />,
    );

    expect(screen.getByText('✔️')).toBeInTheDocument();
  });

  // Test 7: Manejo de teclado (accesibilidad)
  test('handles keyboard events for onClick', () => {
    const handleClick = vi.fn();

    render(
      <UserTextCard
        avatar={mockAvatar}
        userName="Test User"
        content="Test content"
        onClick={handleClick}
      />,
    );

    fireEvent.keyDown(screen.getByText('Test content'), { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
