import { render, screen } from '@testing-library/react';
import ArticleTitle from './ArticleTitle.tsx';

describe ('ArticleTitle', () => {
    test('title of an article', () => {
        const mockTitle = 'New title of an article';
        render(<ArticleTitle title ={mockTitle}/>);
        expect(screen.getByText(mockTitle)).toBeInTheDocument();
    });
});
