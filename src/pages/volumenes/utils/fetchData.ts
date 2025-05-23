import FetchCache from '../../../fetch/fetch';

export interface ApiResponse {
  data: {
    id: number;
    attributes: {
      Year: string;
      Volumes: string;
    };
  }[];
}

export async function fetchData(API_ENDPOINT: string) {
  const fetcher = new FetchCache<ApiResponse>(`${API_ENDPOINT}/api/year-volumes`, {});

  try {
    const response = await fetcher.get();
    return response;
  } catch (error) {
    return null;
  }
}
