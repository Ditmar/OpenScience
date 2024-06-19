import { render } from '@testing-library/react';
import LabelResourcesPage from './LabelResourcesPage.tsx';

describe('LLabelResourcesPage Component', () => {
  test('renders correctly with desktop props', () => {
    const { getByText } = render(<LabelResourcesPage text1="RECURSOS" text2="PAGINA" />);

    expect(getByText('RECURSOS')).toBeInTheDocument();
    expect(getByText('PAGINA')).toBeInTheDocument();
  });

  test('renders correctly with mobile props', () => {
    const { getByText } = render(<LabelResourcesPage text1="RECURSOS" text2="PAGINA" />);

    expect(getByText('RECURSOS')).toBeInTheDocument();
    expect(getByText('PAGINA')).toBeInTheDocument();
  });
});
