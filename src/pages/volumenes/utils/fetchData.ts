import FetchCache from '../../../fetch/fetch';

const API_URL = 'http://openscience.peliscast.com:1337/api/year-volumes';
export interface ApiResponse {
  data: {
    id: number;
    attributes: {
      Year: string;
      Volumes: string;
    };
  }[];
}

export async function fetchData() {
  const fetcher = new FetchCache<ApiResponse>(API_URL, {});

  try {
    const response = await fetcher.get();
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
