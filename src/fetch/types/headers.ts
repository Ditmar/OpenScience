export interface HeadersConfig {
  'Content-Type'?: string;
  Authorization?: string;
  'Custom-Header'?: string;
  Accept?: string;
  'User-Agent'?: string;
  [key: string]: string | undefined;
}
