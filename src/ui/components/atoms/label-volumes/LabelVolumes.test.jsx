import { render, screen } from '@testing-library/react';
import LabelVolumes from './LabelVolumes.tsx';

describe('LabelVolumes Component', () => {
  test('Should display the correct text', () => {
    render(<LabelVolumes text="VOLÚMENES" />);
    expect(screen.getByText('VOLÚMENES')).toBeInTheDocument();
  });

  test('Should render the provided text', () => {
    render(<LabelVolumes text="CUSTOM TEXT" />);
    expect(screen.getByText('CUSTOM TEXT')).toBeInTheDocument();
  });

  test('Should apply the correct CSS class', () => {
    const { container } = render(<LabelVolumes text="VOLÚMENES" />);
    const labelElement = container.querySelector('.label-volumes__text');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent('VOLÚMENES');
  });
});