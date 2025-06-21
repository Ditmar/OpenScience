import type { AppConfig } from '../config/config-manager';

export interface ArticlesApiResponse {
  data: {
    id: number;
    attributes: {
      title: string;
      date: string;
      complete_text: string;
      brief: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
}
export interface Locals {
  API_END_POINT: string;
  API_KEY: string;
  API_BASE_ROUTE: string;
  DOMAIN: string;
  collections: (API_ROUTE: string) => Promise<ArticlesApiResponse>;

  config: AppConfig;
}
