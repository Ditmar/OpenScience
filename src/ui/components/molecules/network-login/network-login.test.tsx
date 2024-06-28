import React from 'react';
import { render } from '@testing-library/react';
import NetworkLogin from './network-login';

describe('NetworkLogin component', () => {
  it('renders correctly', () => {
    const { container } = render(<NetworkLogin />);
    expect(container).toMatchSnapshot();
  });
});
