import fetchMock from "jest-fetch-mock";

import { getCategories } from './category';

fetchMock.enableMocks();

describe('category service', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  
  it('getCategories', async () => {
    fetch.mockResponseOnce(JSON.stringify([{ id: 42 }]));
    const categories = await getCategories();
    expect(categories.length).toEqual(1);
    expect(fetch).toHaveBeenCalledWith('/categories');
  });
});
