import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import YearList from './YearList';
import dataMock from './__mock__/datamock.json';

describe('YearList', () => {
  it('should render the correct text button', () => {
    render(<YearList data={dataMock.data} buttonText="año" />);

    expect(screen.getByText(/año/i)).toBeInTheDocument();
  });
});
