import { render, screen } from '@testing-library/react';
import LabelVolumes from './LabelVolumes.tsx';

describe('LabelVolumes Component', () => {
  test('should display the correct text', () => {
    render(<LabelVolumes text="VOLÚMENES" />);
    expect(screen.getByText('VOLÚMENES')).toBeInTheDocument();
  });
});
