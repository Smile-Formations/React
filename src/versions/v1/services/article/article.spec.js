import fetchMock from "jest-fetch-mock";

import { getArticles } from './article';

fetchMock.enableMocks();

describe('article service', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  
  it('getArticles', async () => {
    fetch.mockResponseOnce(JSON.stringify([{ id: 42 }]));
    const articles = await getArticles();
    expect(articles.length).toEqual(1);
    expect(fetch).toHaveBeenCalledWith('/articles');
  });
});
