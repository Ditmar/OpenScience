import { render } from '@testing-library/react';
import { InputLabelText } from './InputLabelText';

describe('InputLabelText Component', () => {
  it('renders disabled state', () => {
    const { container } = render(<InputLabelText label="Input Label" disabled />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const { container } = render(<InputLabelText label="Input Label" error />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot disabled', () => {
    const { container } = render(<InputLabelText label="Input Label" disabled />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot helper', () => {
    const { container } = render(<InputLabelText label="Input Label" helper />);
    expect(container).toMatchSnapshot();
  });
});
