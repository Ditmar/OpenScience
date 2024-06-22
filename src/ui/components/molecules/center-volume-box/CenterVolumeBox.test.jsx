import { render, screen } from '@testing-library/react';
import CenterVolumeBox from './CenterVolumeBox.tsx';

describe('CenterVolumeBox Component', () => {
  test('Should display the correct text', () => {
    render(<CenterVolumeBox text="ABRIL 16. 2023 | Vol.1 | Nu.1" />);
    expect(screen.getByText('ABRIL 16. 2023 | Vol.1 | Nu.1')).toBeInTheDocument();
  });
});
