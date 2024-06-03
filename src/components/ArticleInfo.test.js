import { render } from '@testing-library/astro';
import { describe, it, expect } from 'vitest';
import ArticleInfo from './ArticleInfo.astro';

describe('ArticleInfo Component', () => {
  it('should display the correct date and volume number', async () => {
    const { getByText } = await render(ArticleInfo, { date: '2024-05-26', volumeNumber: '42' });

    expect(getByText('Fecha:')).toBeInTheDocument();
    expect(getByText('2024-05-26')).toBeInTheDocument();
    expect(getByText('Número de Volumen:')).toBeInTheDocument();
    expect(getByText('42')).toBeInTheDocument();
  });
});
