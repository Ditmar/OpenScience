import { render, screen } from '@testing-library/react';
import ButtonLabel from './ButtonLabel.tsx';
import Home from '../../../../assets/icons/home.svg?raw';
import Articles from '../../../../assets/icons/articles.svg?raw';
import Volume from '../../../../assets/icons/volume.svg?raw';

describe('Testing ButtonLabel React Component', () => {
  test('should render Articles', () => {
    render(
      <ButtonLabel icon={Articles} variant="primary">
        Articles
      </ButtonLabel>,
    );
    const buttonElement = screen.getByText(/Articles/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should render Home', () => {
    render(
      <ButtonLabel icon={Home} variant="secondary">
        Home
      </ButtonLabel>,
    );
    const buttonElement = screen.getByText(/Home/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should render Volume', () => {
    render(
      <ButtonLabel icon={Volume} variant="tertiary">
        Volume
      </ButtonLabel>,
    );
    const buttonElement = screen.getByText(/Volume/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
