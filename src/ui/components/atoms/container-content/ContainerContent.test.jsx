import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import { fireEvent } from '@storybook/test';
import ContainerContent, { Container } from './ContainerContent.tsx';

describe('Testing containerContent React Component', () => {
  test('should render icon', () => {
    render(<ContainerContent icon={Container}>Container</ContainerContent>);
    const iconElement = screen.getByText(/Container/i);
    expect(iconElement).toBeInTheDocument();
  });

  test('collapses content when clicked by user', () => {
    render(<ContainerContent icon={Container}>Container</ContainerContent>);
    expect(screen.queryByText(/Expanded content/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByText(/Container/i));
    expect(screen.getByText(/Container/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Container/i));
    // expect(screen.queryByText(/Container/i)).not.toBeInTheDocument();
  });
});
