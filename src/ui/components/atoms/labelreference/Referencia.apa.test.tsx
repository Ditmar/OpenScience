import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReferenciaAPA from './Referencia.apa';

describe('Testing ReferenciaAPA React Component', () => {
  test('should render with correct reference', () => {
    const referenciaText =
      '1. A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022)';
    render(<ReferenciaAPA referencia={referenciaText} />);
    const referenciaElement = screen.getByText(referenciaText);
    expect(referenciaElement).toBeInTheDocument();
  });
});
