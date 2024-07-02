import { render, screen } from '@testing-library/react';
import React from 'react';
import LabelDate from './LabelDate.tsx';
import styles from './LabelDate.module.scss';

describe('Testing React LabelDate Component', () => {
  test('Must render Label Date 1', () => {
    render(<LabelDate date={new Date(2022, 0, 5)} />);
    const labelElement = screen.getByText('Enero 5 | 2022');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass(styles.labeldate);
    expect(labelElement).not.toHaveClass(styles['labeldate--overflow']);
    expect(labelElement.dataset.iso).toBe('2022-01-05');
  });

  test('Must render Label Date 2', () => {
    render(<LabelDate date={new Date(2018, 3, 20)} />);
    const labelElement = screen.getByText('Abril 20 | 2018');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass(styles.labeldate);
    expect(labelElement).not.toHaveClass(styles['labeldate--overflow']);
    expect(labelElement.dataset.iso).toBe('2018-04-20');
  });

  test('Must render Label Date 3', () => {
    render(<LabelDate date={new Date(2022, 11, 1)} />);
    const labelElement = screen.getByText('Diciembre 1 | 2022');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass(styles.labeldate);
    expect(labelElement).not.toHaveClass(styles['labeldate--overflow']);
    expect(labelElement.dataset.iso).toBe('2022-12-01');
  });
});
