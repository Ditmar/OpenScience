import { render } from '@testing-library/react';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import { IconMui } from './IconMui';

describe('IconMui Component', () => {
  it('renders disabled state', () => {
    const { container } = render(<IconMui iconName={LanguageSharpIcon} disabled />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const { container } = render(<IconMui iconName={LanguageSharpIcon} error />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot disabled', () => {
    const { container } = render(<IconMui iconName={LanguageSharpIcon} disabled />);
    expect(container).toMatchSnapshot();
  });
});
