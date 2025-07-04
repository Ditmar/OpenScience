import { render } from '@testing-library/react';
import { InputLabel } from './InputLabel';

describe('InputLabel Component', () => {
  it('renders disabled state', () => {
    const { container } = render(<InputLabel label="Input Label" />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with icons', () => {
    const { container } = render(
      <InputLabel
        label="Input Label"
        leftIcon="LanguageSharpIcon"
        rightIcon="CancelOutlinedIcon"
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const { container } = render(
      <InputLabel label="Input Label" labelError leftIconError rightIconError />,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot disabled', () => {
    const { container } = render(
      <InputLabel label="Input Label" labelDisabled leftIconDisabled rightIconDisabled />,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot helper', () => {
    const { container } = render(<InputLabel label="Input Label" labelHelper />);
    expect(container).toMatchSnapshot();
  });
});
