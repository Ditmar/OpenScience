import { vi } from 'vitest';

describe('test fetch wrapper', () => {
  test('fetch wrapper', async () => {
    const mockResponse = {
      userId: 1,
      id: 2,
      title: 'test pass',
      completed: false,
    };
    vi.spyOn(window, 'fetch').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      } as unknown as Response);
    });
  });
});
