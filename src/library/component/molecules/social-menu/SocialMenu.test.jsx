import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { vi } from 'vitest';
import SocialMenu from './SocialMenu.tsx';

const mockWindowOpen = vi.fn();
Object.defineProperty(window, 'open', { value: mockWindowOpen });

const theme = createTheme();

const renderWithTheme = (ui) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

const mockSocialLinks = [
  { id: 'whatsapp', type: 'whatsapp', url: 'https://wa.me/1234567890' },
  { id: 'telegram', type: 'telegram', url: 'https://t.me/username' },
  { id: 'facebook', type: 'facebook', url: 'https://facebook.com/page' },
];

describe('SocialMenu', () => {
  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  it('renderiza los iconos de redes sociales', () => {
    renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);
    expect(screen.getByTestId('social-link-whatsapp')).toBeInTheDocument();
    expect(screen.getByTestId('social-link-telegram')).toBeInTheDocument();
    expect(screen.getByTestId('social-link-facebook')).toBeInTheDocument();
  });

  it('llama a window.open al hacer clic en un icono', () => {
    renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);
    fireEvent.click(screen.getByTestId('social-link-whatsapp'));
    expect(mockWindowOpen).toHaveBeenCalledWith(
      'https://wa.me/1234567890',
      '_blank',
      'noopener,noreferrer',
    );
  });

  it('llama a onSocialClick si se proporciona', () => {
    const onSocialClick = vi.fn();
    renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} onSocialClick={onSocialClick} />);
    fireEvent.click(screen.getByTestId('social-link-telegram'));
    expect(onSocialClick).toHaveBeenCalledWith({
      id: 'telegram',
      type: 'telegram',
      url: 'https://t.me/username',
    });
  });

  it('no renderiza nada si socialLinks está vacío', () => {
    const { container } = renderWithTheme(<SocialMenu socialLinks={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('permite navegación por teclado (Enter)', () => {
    renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);
    const btn = screen.getByTestId('social-link-facebook');
    btn.focus();
    fireEvent.keyDown(btn, { key: 'Enter', code: 'Enter' });
    expect(mockWindowOpen).toHaveBeenCalledWith(
      'https://facebook.com/page',
      '_blank',
      'noopener,noreferrer',
    );
  });
});
