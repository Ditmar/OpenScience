import { render, screen } from '@testing-library/react';
import HeroBanner from '../../atoms/hero-banner/HeroBanner';
import Rectangle6 from '../../atoms/hero-banner/__mock__/imgs/Rectangle6.png';
import NavBar from '../../atoms/navbar/Navbar';
import ArticlesIcon from '../../../../assets/icons/article.svg?raw';
import StartIcon from '../../../../assets/icons/start.svg?raw';
import VolumesIcon from '../../../../assets/icons/volumes.svg?raw';
import LoginRegisterButtons from '../login-register-buttons/LoginRegisterButtons';
import PrimaryButtons from '../../atoms/primary-buttons/PrimaryButtons';

describe('Testing Button React Component', () => {
  test('should be rendere Articulos', () => {
    render(<NavBar icon={ArticlesIcon}>Articulos</NavBar>);
    const buttonElement = screen.getByText(/Articulos/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be rendere Inicio', () => {
    render(<NavBar icon={StartIcon}>Inicio</NavBar>);
    const buttonElement = screen.getByText(/Inicio/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be rendere Volumenes', () => {
    render(<NavBar icon={VolumesIcon}>Volumenes</NavBar>);
    const buttonElement = screen.getByText(/Volumenes/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

describe('First testing Hero Banner React Component', () => {
  test('should be rendere the hero banner image Rectangle6', () => {
    render(
      <HeroBanner className="heroBanner__content" backgroundImage={String(Rectangle6)} alt="text">
        test
      </HeroBanner>,
    );
    const heroBannerElement = screen.getByAltText('text');
    expect(heroBannerElement).toBeInTheDocument();
  });
});

describe('LoginRegisterButtons Component', () => {
  test('should render both buttons', () => {
    render(
      <LoginRegisterButtons>
        <PrimaryButtons variant="primary">Iniciar sesión</PrimaryButtons>
        <PrimaryButtons variant="tertiary">Registrarse</PrimaryButtons>
      </LoginRegisterButtons>,
    );
    const loginButton = screen.getByText(/Iniciar sesión/i);
    const registerButton = screen.getByText(/Registrarse/i);

    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
