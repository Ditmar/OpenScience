import { render, screen } from '@testing-library/react';
import PdfShareButton from './ButtonsPdfShare';

describe('PdfShareButton Component', () => {
  it('should render PdfShareButton component', () => {
    render(<PdfShareButton />);
    const shareButton = screen.getByTestId('pdf-share-button');
    expect(shareButton).toBeInTheDocument();
  });
  test('items should not be visible initially', () => {
    render(<PdfShareButton />);
    expect(screen.queryByText('WhatsappIcon')).not.toBeInTheDocument();
    expect(screen.queryByText('FacebookIcon')).not.toBeInTheDocument();
    expect(screen.queryByText('TelegramIcon')).not.toBeInTheDocument();
  });
});
