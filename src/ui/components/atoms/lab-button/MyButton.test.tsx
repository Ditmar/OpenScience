// MyButton.test.tsx

import { render, screen } from '@testing-library/react';
import { MyButton } from './MyButton';  // Importación nombrada

test('renders with label', () => {
  render(<MyButton label="Click me" />);
  const button = screen.getByText(/Click me/i);
  expect(button).toBeInTheDocument();
});







