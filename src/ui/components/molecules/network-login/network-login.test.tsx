import React from 'react';
import { render } from '@testing-library/react';
import NetworkLogin from './network-login';

describe('NetworkLogin Component', () => {
  it('should render NetworkLogin component', () => {
    const { getByTestId } = render(<NetworkLogin />);
    const panelElement = getByTestId('net-login');
    expect(panelElement).toBeInTheDocument();
  });
});
