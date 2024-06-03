
import { render } from '@testing-library/astro';
import { describe, it, expect } from 'vitest';
import Breadcrumbs from './Breadcrumbs.astro';
import { breadcrumbsMock } from '../mocks/mockData.js';

describe('Breadcrumbs Component', () => {
  it('should display the correct breadcrumb links', async () => {
    const { getByText } = await render(Breadcrumbs, { breadcrumbs: breadcrumbsMock });

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Blog')).toBeInTheDocument();
    expect(getByText('Article')).toBeInTheDocument();

    expect(getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(getByText('Blog').closest('a')).toHaveAttribute('href', '/blog');
    expect(getByText('Article').closest('li')).toHaveClass('active');
  });
});
