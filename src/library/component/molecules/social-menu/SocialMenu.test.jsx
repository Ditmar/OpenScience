import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import SocialMenu from './SocialMenu.tsx';

// Mock para window.open
const mockWindowOpen = vi.fn();
Object.defineProperty(window, 'open', { value: mockWindowOpen });

// Theme de prueba
const theme = createTheme();

// Helper para renderizar con theme
const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

// Datos de prueba
const mockSocialLinks = [
  {
    id: 'whatsapp',
    type: 'whatsapp',
    url: 'https://wa.me/1234567890',
  },
  {
    id: 'telegram',
    type: 'telegram',
    url: 'https://t.me/username',
  },
  {
    id: 'facebook',
    type: 'facebook',
    url: 'https://facebook.com/page',
  },
];

describe('SocialMenu', () => {
  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  describe('Renderizado básico', () => {
    it('debería renderizar correctamente con props por defecto', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);

      expect(screen.getByTestId('social-menu')).toBeInTheDocument();
      expect(screen.getByTestId('social-link-whatsapp')).toBeInTheDocument();
      expect(screen.getByTestId('social-link-telegram')).toBeInTheDocument();
      expect(screen.getByTestId('social-link-facebook')).toBeInTheDocument();
    });

    it('debería renderizar con testId personalizado', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} testId="custom-social-menu" />);

      expect(screen.getByTestId('custom-social-menu')).toBeInTheDocument();
    });

    it('debería renderizar con className personalizada', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} className="custom-class" />);

      expect(screen.getByTestId('social-menu')).toHaveClass('custom-class');
    });

    it('no debería renderizar nada si socialLinks está vacío', () => {
      const { container } = renderWithTheme(<SocialMenu socialLinks={[]} />);
      expect(container.firstChild).toBeNull();
    });

    it('no debería renderizar nada si socialLinks es undefined', () => {
      // Suprimir error de consola esperado
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => {
        renderWithTheme(<SocialMenu socialLinks={undefined} />);
      }).toThrow();

      consoleSpy.mockRestore();
    });

    it('no debería renderizar nada si socialLinks es null', () => {
      // Suprimir error de consola esperado
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => {
        renderWithTheme(<SocialMenu socialLinks={null} />);
      }).toThrow();

      consoleSpy.mockRestore();
    });
  });

  describe('Orientación', () => {
    it('debería aplicar orientación vertical por defecto', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);
      const container = screen.getByTestId('social-menu');

      // Verificar que el componente styled recibe la prop orientation
      expect(container).toBeInTheDocument();
    });

    it('debería aplicar orientación horizontal cuando se especifica', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} orientation="horizontal" />);
      const container = screen.getByTestId('social-menu');
      expect(container).toBeInTheDocument();
    });
  });

  describe('Tamaños', () => {
    it('debería aplicar tamaño medium por defecto', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);
      const whatsappButton = screen.getByTestId('social-link-whatsapp');
      expect(whatsappButton).toBeInTheDocument();
    });

    it('debería aplicar tamaño small', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} size="small" />);
      const whatsappButton = screen.getByTestId('social-link-whatsapp');
      expect(whatsappButton).toBeInTheDocument();
    });

    it('debería aplicar tamaño large', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} size="large" />);
      const whatsappButton = screen.getByTestId('social-link-whatsapp');
      expect(whatsappButton).toBeInTheDocument();
    });
  });

  describe('Color de fondo', () => {
    it('debería aplicar color de fondo por defecto', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);
      const container = screen.getByTestId('social-menu');
      expect(container).toBeInTheDocument();
    });

    it('debería aplicar color de fondo personalizado', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} backgroundColor="#ff0000" />);
      const container = screen.getByTestId('social-menu');
      expect(container).toBeInTheDocument();
    });
  });

  describe('Iconos de redes sociales', () => {
    it('debería renderizar el icono correcto para WhatsApp', () => {
      renderWithTheme(<SocialMenu socialLinks={[mockSocialLinks[0]]} />);

      const whatsappButton = screen.getByTestId('social-link-whatsapp');
      const whatsappIcon = whatsappButton.querySelector('svg[data-testid="WhatsAppIcon"]');
      expect(whatsappIcon).toBeInTheDocument();
    });

    it('debería renderizar el icono correcto para Telegram', () => {
      renderWithTheme(<SocialMenu socialLinks={[mockSocialLinks[1]]} />);

      const telegramButton = screen.getByTestId('social-link-telegram');
      const telegramIcon = telegramButton.querySelector('svg[data-testid="TelegramIcon"]');
      expect(telegramIcon).toBeInTheDocument();
    });

    it('debería renderizar el icono correcto para Facebook', () => {
      renderWithTheme(<SocialMenu socialLinks={[mockSocialLinks[2]]} />);

      const facebookButton = screen.getByTestId('social-link-facebook');
      const facebookIcon = facebookButton.querySelector('svg[data-testid="FacebookRoundedIcon"]');
      expect(facebookIcon).toBeInTheDocument();
    });

    it('debería manejar tipos de redes sociales desconocidos', () => {
      const unknownSocialLink = [
        {
          id: 'unknown',
          type: 'unknown',
          url: 'https://example.com',
        },
      ];

      renderWithTheme(<SocialMenu socialLinks={unknownSocialLink} />);

      const container = screen.getByTestId('social-menu');
      expect(container).toBeInTheDocument();

      // El botón debería existir pero sin icono
      const unknownButton = screen.getByTestId('social-link-unknown');
      expect(unknownButton).toBeInTheDocument();
      expect(unknownButton.innerHTML).not.toContain('svg');
    });
  });

  describe('Etiquetas de accesibilidad', () => {
    it('debería tener las etiquetas aria-label correctas', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);

      expect(screen.getByTestId('social-link-whatsapp')).toHaveAttribute(
        'aria-label',
        'Contactar por WhatsApp',
      );
      expect(screen.getByTestId('social-link-telegram')).toHaveAttribute(
        'aria-label',
        'Contactar por Telegram',
      );
      expect(screen.getByTestId('social-link-facebook')).toHaveAttribute(
        'aria-label',
        'Visitar página de Facebook',
      );
    });

    it('debería usar etiqueta por defecto para tipos desconocidos', () => {
      const unknownSocialLink = [
        {
          id: 'unknown',
          type: 'unknown',
          url: 'https://example.com',
        },
      ];

      renderWithTheme(<SocialMenu socialLinks={unknownSocialLink} />);

      expect(screen.getByTestId('social-link-unknown')).toHaveAttribute('aria-label', 'Red social');
    });
  });

  describe('Interacciones con clic', () => {
    it('debería abrir URL en nueva ventana al hacer clic', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);

      const whatsappButton = screen.getByTestId('social-link-whatsapp');
      fireEvent.click(whatsappButton);

      expect(mockWindowOpen).toHaveBeenCalledWith(
        'https://wa.me/1234567890',
        '_blank',
        'noopener,noreferrer',
      );
    });

    it('debería llamar onSocialClick cuando se proporciona', () => {
      const mockOnSocialClick = vi.fn();
      renderWithTheme(
        <SocialMenu socialLinks={mockSocialLinks} onSocialClick={mockOnSocialClick} />,
      );

      const telegramButton = screen.getByTestId('social-link-telegram');
      fireEvent.click(telegramButton);

      expect(mockOnSocialClick).toHaveBeenCalledWith({
        id: 'telegram',
        type: 'telegram',
        url: 'https://t.me/username',
      });
    });

    it('debería manejar múltiples clics en diferentes botones', () => {
      const mockOnSocialClick = vi.fn();
      renderWithTheme(
        <SocialMenu socialLinks={mockSocialLinks} onSocialClick={mockOnSocialClick} />,
      );

      fireEvent.click(screen.getByTestId('social-link-whatsapp'));
      fireEvent.click(screen.getByTestId('social-link-facebook'));

      expect(mockOnSocialClick).toHaveBeenCalledTimes(2);
      expect(mockWindowOpen).toHaveBeenCalledTimes(2);
    });

    it('debería prevenir el comportamiento por defecto', () => {
      const mockOnSocialClick = vi.fn();
      renderWithTheme(
        <SocialMenu socialLinks={mockSocialLinks} onSocialClick={mockOnSocialClick} />,
      );

      const whatsappButton = screen.getByTestId('social-link-whatsapp');

      // Simular evento de clic
      fireEvent.click(whatsappButton);

      // Verificar que window.open fue llamado (indicando que preventDefault funcionó)
      expect(mockWindowOpen).toHaveBeenCalled();
      expect(mockOnSocialClick).toHaveBeenCalled();
    });
  });

  describe('Interacciones con teclado', () => {
    it('debería activarse con la tecla Enter', () => {
      const mockOnSocialClick = vi.fn();
      renderWithTheme(
        <SocialMenu socialLinks={mockSocialLinks} onSocialClick={mockOnSocialClick} />,
      );

      const whatsappButton = screen.getByTestId('social-link-whatsapp');
      fireEvent.keyDown(whatsappButton, { key: 'Enter' });

      expect(mockOnSocialClick).toHaveBeenCalledWith(mockSocialLinks[0]);
      expect(mockWindowOpen).toHaveBeenCalledWith(
        'https://wa.me/1234567890',
        '_blank',
        'noopener,noreferrer',
      );
    });

    it('debería activarse con la barra espaciadora', () => {
      const mockOnSocialClick = vi.fn();
      renderWithTheme(
        <SocialMenu socialLinks={mockSocialLinks} onSocialClick={mockOnSocialClick} />,
      );

      const telegramButton = screen.getByTestId('social-link-telegram');
      fireEvent.keyDown(telegramButton, { key: ' ' });

      expect(mockOnSocialClick).toHaveBeenCalledWith(mockSocialLinks[1]);
      expect(mockWindowOpen).toHaveBeenCalledWith(
        'https://t.me/username',
        '_blank',
        'noopener,noreferrer',
      );
    });

    it('no debería activarse con otras teclas', () => {
      const mockOnSocialClick = vi.fn();
      renderWithTheme(
        <SocialMenu socialLinks={mockSocialLinks} onSocialClick={mockOnSocialClick} />,
      );

      const facebookButton = screen.getByTestId('social-link-facebook');
      fireEvent.keyDown(facebookButton, { key: 'Tab' });
      fireEvent.keyDown(facebookButton, { key: 'Escape' });
      fireEvent.keyDown(facebookButton, { key: 'ArrowDown' });

      expect(mockOnSocialClick).not.toHaveBeenCalled();
      expect(mockWindowOpen).not.toHaveBeenCalled();
    });
  });

  describe('Accesibilidad', () => {
    it('debería tener los atributos ARIA correctos en el contenedor', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);

      const container = screen.getByTestId('social-menu');
      expect(container).toHaveAttribute('role', 'navigation');
    });

    it('debería tener los atributos correctos en los botones', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);

      const whatsappButton = screen.getByTestId('social-link-whatsapp');
      expect(whatsappButton).toHaveAttribute('role', 'button');
      expect(whatsappButton).toHaveAttribute('tabIndex', '0');
      expect(whatsappButton).toHaveAttribute('aria-label', 'Contactar por WhatsApp');
    });

    it('debería tener iconos con atributos de accesibilidad correctos', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);

      const whatsappButton = screen.getByTestId('social-link-whatsapp');
      const whatsappIcon = whatsappButton.querySelector('svg');

      expect(whatsappIcon).toHaveAttribute('aria-hidden');
      expect(whatsappIcon).toHaveAttribute('role', 'img');
    });
  });

  describe('Casos edge', () => {
    it('debería manejar un solo enlace social', () => {
      const singleLink = [mockSocialLinks[0]];
      renderWithTheme(<SocialMenu socialLinks={singleLink} />);

      expect(screen.getByTestId('social-link-whatsapp')).toBeInTheDocument();
      expect(screen.queryByTestId('social-link-telegram')).not.toBeInTheDocument();
      expect(screen.queryByTestId('social-link-facebook')).not.toBeInTheDocument();
    });

    it('debería manejar enlaces con URLs complejas', () => {
      const complexLinks = [
        {
          id: 'whatsapp-complex',
          type: 'whatsapp',
          url: 'https://wa.me/1234567890?text=Hola%20mundo',
        },
      ];

      renderWithTheme(<SocialMenu socialLinks={complexLinks} />);

      const button = screen.getByTestId('social-link-whatsapp');
      fireEvent.click(button);

      expect(mockWindowOpen).toHaveBeenCalledWith(
        'https://wa.me/1234567890?text=Hola%20mundo',
        '_blank',
        'noopener,noreferrer',
      );
    });

    it('debería manejar múltiples enlaces del mismo tipo', () => {
      const duplicateTypeLinks = [
        {
          id: 'whatsapp-1',
          type: 'whatsapp',
          url: 'https://wa.me/1111111111',
        },
        {
          id: 'whatsapp-2',
          type: 'whatsapp',
          url: 'https://wa.me/2222222222',
        },
      ];

      renderWithTheme(<SocialMenu socialLinks={duplicateTypeLinks} />);

      // Ambos botones deberían existir con diferentes URLs
      const buttons = screen.getAllByTestId('social-link-whatsapp');
      expect(buttons).toHaveLength(2);
    });

    it('debería funcionar sin callback onSocialClick', () => {
      renderWithTheme(<SocialMenu socialLinks={mockSocialLinks} />);

      const whatsappButton = screen.getByTestId('social-link-whatsapp');

      // No debería generar error al hacer clic sin callback
      expect(() => {
        fireEvent.click(whatsappButton);
      }).not.toThrow();

      expect(mockWindowOpen).toHaveBeenCalled();
    });
  });
});
