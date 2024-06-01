import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReferenceAPA from './Reference.apa';

describe('Testing ReferenciaAPA React Component', () => {
  test('should render with correct reference', () => {
    const referenceText =
      '1. A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022)';
    render(<ReferenceAPA reference={referenceText} />);
    const referenceElement = screen.getByText(referenceText);
    expect(referenceElement).toBeInTheDocument();
  });
});
