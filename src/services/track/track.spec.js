import fetchMock from "jest-fetch-mock";

import { getTracks } from './track';

fetchMock.enableMocks();

describe('track service', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  
  it('getTracks', async () => {
    fetch.mockResponseOnce(JSON.stringify([{ id: 42 }]));
    const tracks = await getTracks();
    expect(tracks.length).toEqual(1);
    expect(fetch).toHaveBeenCalledWith('/tracks');
  });
});
