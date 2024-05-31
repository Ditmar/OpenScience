import { render, screen } from '@testing-library/react';
import downloads from '../../../../assets/icons/downloads.svg?raw';
import close from '../../../../assets/icons/close.svg?raw';
import Button from './Closebutton.tsx';

describe('Testing Button React Component', () => {
  test('should be rendere close', () => {
    render(<Button icon={close}>close</Button>);
    const buttonElement = screen.getByText(/close/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be rendere downloads', () => {
    render(<Button icon={downloads}>downloads</Button>);
    const buttonElement = screen.getByText(/downloads/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
