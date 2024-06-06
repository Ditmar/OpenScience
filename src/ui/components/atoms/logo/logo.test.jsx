import { render, screen } from '@testing-library/react';
import Logo from './logo.tsx'; // Adjust the import to your actual file structure
import logoImage from './logo.svg'; // Adjust the import to your actual file structure

test('should render the logo image', () => {
  render(<Logo src={logoImage} alt="Logotipo de la empresa" />);
  const logoElement = screen.getByRole('img', { name: /Logotipo de la empresa/i });
  expect(logoElement).toBeInTheDocument();
});
