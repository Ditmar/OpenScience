import { render, screen } from '@testing-library/react';
import TextCardStat from './TextCardStat';

describe('TextCardStat Component', () => {
  test('renderiza el título', () => {
    render(
      <TextCardStat
        label="Etiqueta de prueba"
        description="Descripción de prueba"
        badgeText="Usuarios"
        badgeColor="#1976d2"
        badgeNumber={42}
        badgeAvatarUrl="https://example.com/avatar.png"
        title="Estadísticas de Usuarios"
        content="Contenido detallado de los usuarios"
      />,
    );
    const titleElement = screen.getByText(/Estadísticas de Usuarios/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renderiza el contenido', () => {
    render(
      <TextCardStat
        label="Etiqueta de prueba"
        description="Descripción de prueba"
        badgeText="Usuarios"
        badgeColor="#1976d2"
        badgeNumber={42}
        badgeAvatarUrl="https://example.com/avatar.png"
        title="Estadísticas de Usuarios"
        content="Contenido detallado de los usuarios"
      />,
    );
    const contentElement = screen.getByText(/Contenido detallado de los usuarios/i);
    expect(contentElement).toBeInTheDocument();
  });

  test('renderiza el número del badge', () => {
    render(
      <TextCardStat
        label="Etiqueta de prueba"
        description="Descripción de prueba"
        badgeText="Usuarios"
        badgeColor="#1976d2"
        badgeNumber={42}
        badgeAvatarUrl="https://example.com/avatar.png"
        title="Estadísticas de Usuarios"
        content="Contenido detallado de los usuarios"
      />,
    );
    const badgeNumberElement = screen.getByText('42');
    expect(badgeNumberElement).toBeInTheDocument();
  });

  test('renderiza el avatar si se proporciona una URL', () => {
    render(
      <TextCardStat
        label="Etiqueta de prueba"
        description="Descripción de prueba"
        badgeText="Usuarios"
        badgeColor="#1976d2"
        badgeNumber={42}
        badgeAvatarUrl="https://example.com/avatar.png"
        title="Estadísticas de Usuarios"
        content="Contenido detallado de los usuarios"
      />,
    );
    const avatarElement = screen.getByRole('img', { name: /Avatar/i });
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute('src', 'https://example.com/avatar.png');
  });

  test('renderiza el checkbox', () => {
    render(
      <TextCardStat
        label="Etiqueta de prueba"
        description="Descripción de prueba"
        badgeText="Usuarios"
        badgeColor="#1976d2"
        badgeNumber={42}
        badgeAvatarUrl="https://example.com/avatar.png"
        title="Estadísticas de Usuarios"
        content="Contenido detallado de los usuarios"
      />,
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('no renderiza el avatar si no se proporciona una URL', () => {
    render(
      <TextCardStat
        label="Etiqueta sin avatar"
        description="Descripción sin avatar"
        badgeText="Usuarios"
        badgeColor="#1976d2"
        badgeNumber={42}
        title="Título sin avatar"
        content="Contenido sin avatar"
      />,
    );
    const avatarElement = screen.queryByRole('img', { name: /Avatar/i });
    expect(avatarElement).not.toBeInTheDocument();
  });
});
