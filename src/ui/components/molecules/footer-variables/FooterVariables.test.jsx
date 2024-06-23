import { render, screen } from '@testing-library/react';
import FooterVariables from './FooterVariables.tsx';

describe('FooterVariables Component', () => {
  test('should display the text RECURSOS in LabelResourcesPage', () => {
    render(<FooterVariables />);
    expect(screen.getByText('RECURSOS')).toBeInTheDocument();
  });

  test('should display the text PAGINA in LabelResourcesPage', () => {
    render(<FooterVariables />);
    expect(screen.getByText('PAGINA')).toBeInTheDocument();
  });

  test('should display the text ARTÍCULOS in Variables', () => {
    render(<FooterVariables />);
    expect(screen.getByText('ARTÍCULOS')).toBeInTheDocument();
  });

  test('should display the text VOLÚMENES in Variables', () => {
    render(<FooterVariables />);
    expect(screen.getByText('VOLÚMENES')).toBeInTheDocument();
  });

  test('should display the text UNIPOL.EDU.BO in Variables', () => {
    render(<FooterVariables />);
    expect(screen.getByText('UNIPOL.EDU.BO')).toBeInTheDocument();
  });
});
