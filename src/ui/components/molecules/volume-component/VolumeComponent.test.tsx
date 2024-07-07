import { render, screen } from '@testing-library/react';
import VolumeComponent from './VolumeComponent';

describe('VolumeComponent', () => {
  it('should render LabelDate and LabelVol with correct format', () => {
    const date = new Date('2023-04-16'); 
    const article = 'Test Article';

    render(<VolumeComponent article={article} date={date} />);

    
    const labelDate = screen.getByText(/Abril 16 \| 2023/);
    expect(labelDate).toBeInTheDocument();

   
    const labelVol = screen.getByText(/^Vol\. 1$/);
    expect(labelVol).toBeInTheDocument();
  });
});
