interface SEOConfig {
  title: string;
  description: string;
  openGraph: {
    type: string;
    url: string;
    title: string;
    description: string;
    images: Array<{
      url: string;
      alt?: string;
    }>;
  };
}