export interface ArticleData {
  id: number;
  date: Date;
  title: string;
  description: string;
  author: string;
  pdfUrl?: string;
  shareUrl?: string;
}

export interface VolumeData {
  id: number;
  date: Date;
  volumeLabel: string;
  volumeNumber: number;
  issueNumber: number;
  image: string;
  articles: ArticleData[];
}

export interface IProps {
  volumes: VolumeData[];
}
