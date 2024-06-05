import { render, screen } from '@testing-library/react';
import {LabelRecentsArticles} from './LabelRecentsArticles.tsx';

describe('Recents Articles Component', () => {
  test('Should display the correct text', () => {
    render(<LabelRecentsArticles text="ARTICULOS MAS RECIENTES" />);
    expect(screen.getByText('ARTICULOS MAS RECIENTES')).toBeInTheDocument();
  });

  test('Should render the provided text', () => {
    render(<LabelRecentsArticles text="OTHER TEXT" />);
    expect(screen.getByText('OTHER TEXT')).toBeInTheDocument();
  });

  test('Should apply the correct CSS class', () => {
    const { container } = render(<LabelRecentsArticles text="ARTICULOS MAS RECIENTES" />);
    const labelElement = container.querySelector('.label-recents-articles');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('ARTICULOS MAS RECIENTES');
  });
});