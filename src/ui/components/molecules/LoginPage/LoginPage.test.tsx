import React from 'react';
import { render } from '@testing-library/react';
import NetworkLogin from './LoginPage';

describe('NetworkLogin Component', () => {
  it('should render NetworkLogin component', () => {
    const { getByTestId } = render(<NetworkLogin />);
    const pageElement = getByTestId('login-page');
    expect(pageElement).toBeInTheDocument();
  });
});
