import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Tags from './Tags';

describe('Tags Component', () => {
  it('should render the correct number of tags', () => {
    const labels = ['Workings', 'Optimism', 'Meaning', 'Promoting'];
    render(<Tags labels={labels} />);
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('should handle an empty list of tags', () => {
    render(<Tags labels={[]} />);
    expect(screen.queryByText(/./)).not.toBeInTheDocument();
  });
});
