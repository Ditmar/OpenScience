interface IRequestOptions {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
}

export function generateKey(options: IRequestOptions): string {
  const key = `${options.url}-${options.method}`;
  return key;
}
