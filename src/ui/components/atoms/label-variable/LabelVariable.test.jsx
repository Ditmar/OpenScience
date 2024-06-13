import { render } from '@testing-library/react';
import LabelVariable from './LabelVariable';

describe('LabelVariable Component', () => {
  test('renders correctly with desktop props', () => {
    const { getByText } = render(
      <LabelVariable textbar1="." text1="RECURSOS" textbar2="." text2="PAGINA" />
    );

    expect(getByText('.')).toBeInTheDocument();
    expect(getByText('RECURSOS')).toBeInTheDocument();
    expect(getByText('.')).toBeInTheDocument();
    expect(getByText('PAGINA')).toBeInTheDocument();
  });

  test('renders correctly with mobile props', () => {
    const { getByText } = render(
      <LabelVariable textbar1=" " text1="RECURSOS" textbar2="." text2="PAGINA" />
    );

    expect(getByText(' ')).toBeInTheDocument();
    expect(getByText('RECURSOS')).toBeInTheDocument();
    expect(getByText('.')).toBeInTheDocument();
    expect(getByText('PAGINA')).toBeInTheDocument();
  });
});
