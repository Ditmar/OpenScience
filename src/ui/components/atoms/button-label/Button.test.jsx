import { render, screen } from '@testing-library/react';
import Button from './ButtonLabel.tsx';
import Home from '../../../../assets/icons/home.svg?raw';
import Articles from '../../../../assets/icons/articles.svg?raw';
import Volume from '../../../../assets/icons/volume.svg?raw';

describe('Testing Button React Component', () => {
  test('should be render Articles', () => {
    render(<Button icon={Articles}>Articles</Button>);
    const buttonElement = screen.getByText(/Articles/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be render Home', () => {
    render(<Button icon={Home}>Home</Button>);
    const buttonElement = screen.getByText(/Home/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be render Volume', () => {
    render(<Button icon={Volume}>Volume</Button>);
    const buttonElement = screen.getByText(/Volume/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
