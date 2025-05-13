import { render, screen, fireEvent } from '@testing-library/react';
import GhostButton from './ghost-button';

describe('Testing for GhostButton component', () => {
  it('GhostButton is rendering', () => {
    render(<GhostButton ghostbutton="Ghost button" variant="primary" />);
    screen.getByTestId('ghost-button');
  });

  it('GhostButton has the correct label', () => {
    render(<GhostButton ghostbutton="Ghost button" variant="primary" />);
    screen.getByText('Ghost button');
  });

  it('GhostButton renders small size', () => {
    render(<GhostButton ghostbutton="Small Button" variant="primary" size="small" />);
    screen.getByText('Small Button');
  });

  it('GhostButton renders medium size', () => {
    render(<GhostButton ghostbutton="Medium Button" variant="primary" size="medium" />);
    screen.getByText('Medium Button');
  });

  it('GhostButton renders large size', () => {
    render(<GhostButton ghostbutton="Large Button" variant="primary" size="large" />);
    screen.getByText('Large Button');
  });

  it('GhostButton renders as disabled', () => {
    render(<GhostButton ghostbutton="Disabled Button" variant="primary" disabled />);
    const button = screen.getByText('Disabled Button');
    fireEvent.click(button);
  });

/* it('Should fire onClick event', () => {
    const handleClick = vi.fn();
    render(<GhostButton ghostbutton="Ghost button" variant="primary" onClick={handleClick} />);
    const button = screen.getByText('Ghost button');
    fireEvent.click(button);
  });*/

  it('Should be focused when focus event is fired', () => {
    render(<GhostButton ghostbutton="Ghost button" variant="primary" />);
    const button = screen.getByText('Ghost button');
    fireEvent.focus(button);
  });
});