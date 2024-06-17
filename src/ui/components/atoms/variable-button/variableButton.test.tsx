import { render, screen } from '@testing-library/react';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';
import VariableButton from './VariableButton';

describe('VariableButton Component', () => {
  test('renders PDF button', () => {
    render(<VariableButton icon={PdfIcon} />);
    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders Link button', () => {
    render(<VariableButton icon={LinkIcon} />);
    const buttonElement = screen.getByTestId('button-icon');
    expect(buttonElement).toBeInTheDocument();
  });
});
