import React from 'react';
import { render, screen } from '@testing-library/react';
import VariableButton from '../../atoms/variable-button/VariableButton';
import IconButton from '../../atoms/icon-button/IconButton';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import Facebook from '../../../../assets/icons/facebook1.svg?raw';

describe('PdfShareButton Component', () => {
  test('should render IconButton', () => {
    render(<IconButton icon={Facebook} />);
    const iconButton = screen.getByTestId('button__icon');
    expect(iconButton).toBeInTheDocument();
  });
  test('should render VariableButton', () => {
    render(<VariableButton icon={PdfIcon} />);
    const variableButton = screen.getByTestId('button-icon');
    expect(variableButton).toBeInTheDocument();
  });
});
