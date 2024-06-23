import { render } from '@testing-library/react';
import DividerVariables from './DividerVariables.tsx';

describe('DividerVariables', () => {
  test('renders the divider bar', () => {
    const { container } = render(<DividerVariables />);
    const divider = container.querySelector('.divider-bar');
    expect(divider).toBeInTheDocument();
  });
});
