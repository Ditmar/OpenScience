import { render, screen } from '@testing-library/react';
import GhostButton from './ghost-button';

describe('Testing GhostButton React Component', () => {
  test('should render the GhostButton with primary variant', () => {
    render(<GhostButton ghostbutton="Ghost button" variant="primary" />);
    const buttonElement = screen.getByTestId('ghost-button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should render the GhostButton with the correct label', () => {
    render(<GhostButton ghostbutton="Ghost button" variant="primary" />);
    const buttonElement = screen.getByText('Ghost button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should render the GhostButton with small size', () => {
    render(<GhostButton ghostbutton="Small Button" variant="primary" size="small" />);
    const buttonElement = screen.getByText('Small Button');
    expect(buttonElement.className).toMatch(/small/);
  });

  test('should render the GhostButton with medium size', () => {
    render(<GhostButton ghostbutton="Medium Button" variant="primary" size="medium" />);
    const buttonElement = screen.getByText('Medium Button');
    expect(buttonElement.className).toMatch(/medium/);
  });

  test('should render the GhostButton with large size', () => {
    render(<GhostButton ghostbutton="Large Button" variant="primary" size="large" />);
    const buttonElement = screen.getByText('Large Button');
    expect(buttonElement.className).toMatch(/large/);
  });

  test('should focus the GhostButton when focus event is fired', () => {
    render(<GhostButton ghostbutton="Ghost button" variant="primary" />);
    const buttonElement = screen.getByText('Ghost button');
    buttonElement.focus();
    expect(buttonElement).toHaveFocus();
  });
});
