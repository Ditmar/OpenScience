import img1 from '../../../atoms/thumbnail/__mock__/imgs/Rectangle27.png';
import img2 from '../../../atoms/thumbnail/__mock__/imgs/Rectangle28.png';
import img3 from '../../../atoms/thumbnail/__mock__/imgs/Rectangle29.png';
import img4 from '../../../atoms/thumbnail/__mock__/imgs/Rectangle30.png';

import type { VolumeData } from '../Props/IProps';

export const mockVolumes: VolumeData[] = [
  {
    id: 1,
    date: new Date(2023, 3, 16),
    volumeLabel: 'Vol.',
    volumeNumber: 1,
    issueNumber: 1,
    image: img1,
    articles: [
      {
        id: 1,
        date: new Date(2023, 3, 16),
        title: 'Featured Article Volume 1',
        description: 'Description of the featured article for volume 1.',
        author: 'Author One',
        pdfUrl: 'https://example.com/article1.pdf',
        shareUrl: 'https://example.com/share1',
      },
      {
        id: 2,
        date: new Date(2023, 3, 16),
        title: 'Featured Article Volume 2',
        description: 'Description of the featured article for volume 1.',
        author: 'Author One',
        pdfUrl: 'https://example.com/article1.pdf',
        shareUrl: 'https://example.com/share1',
      },
      {
        id: 3,
        date: new Date(2023, 3, 16),
        title: 'Featured Article Volume 3',
        description: 'Description of the featured article for volume 1.',
        author: 'Author One',
        pdfUrl: 'https://example.com/article1.pdf',
        shareUrl: 'https://example.com/share1',
      },
    ],
  },
  {
    id: 2,
    date: new Date(2023, 4, 10),
    volumeLabel: 'Vol.',
    volumeNumber: 2,
    issueNumber: 2,
    image: img2,
    articles: [
      {
        id: 4,
        date: new Date(2023, 4, 10),
        title: 'Featured Article Volume 4',
        description: 'Description of the featured article for volume 2.',
        author: 'Author Three',
        pdfUrl: 'https://example.com/article3.pdf',
        shareUrl: 'https://example.com/share3',
      },
    ],
  },
  {
    id: 3,
    date: new Date(2023, 5, 5),
    volumeLabel: 'Vol.',
    volumeNumber: 3,
    issueNumber: 3,
    image: img3,
    articles: [
      {
        id: 5,
        date: new Date(2023, 5, 5),
        title: 'Featured Article Volume 5',
        description: 'Description of the featured article from volume 3.',
        author: 'Author Four',
        pdfUrl: 'https://example.com/article4.pdf',
        shareUrl: 'https://example.com/share4',
      },
      {
        id: 6,
        date: new Date(2023, 5, 5),
        title: 'Featured Article Volume 6',
        description: 'Description of the featured article from volume 3.',
        author: 'Author Four',
        pdfUrl: 'https://example.com/article4.pdf',
        shareUrl: 'https://example.com/share4',
      },
    ],
  },
  {
    id: 4,
    date: new Date(2024, 6, 23),
    volumeLabel: 'Vol.',
    volumeNumber: 4,
    issueNumber: 4,
    image: img4,
    articles: [
      {
        id: 7,
        date: new Date(2024, 6, 23),
        title: 'Featured Article Volume 7',
        description: 'Description of the featured article from volume 4.',
        author: 'Author Five',
        pdfUrl: 'https://example.com/article5.pdf',
        shareUrl: 'https://example.com/share5',
      },
    ],
  },
];
