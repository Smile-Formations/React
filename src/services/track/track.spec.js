import fetchMock from "jest-fetch-mock";

import { addTrack, getTrack, getTracks, removeTrack, updateTrack } from './track';

fetchMock.enableMocks();

describe('track service', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('getTrack', async () => {
    fetch.mockResponseOnce(JSON.stringify({ id: 42 }));
    const track = await getTrack(42);
    expect(track.id).toEqual(42);
    expect(fetch).toHaveBeenCalledWith('/tracks/42');
  });

  it('getTracks', async () => {
    fetch.mockResponseOnce(JSON.stringify([{ id: 42 }]));
    const tracks = await getTracks();
    expect(tracks.length).toEqual(1);
    expect(fetch).toHaveBeenCalledWith('/tracks');
  });

  it('addTrack', async () => {
    fetch.mockResponseOnce(JSON.stringify({ id: 42 }));
    const track = await addTrack({ id: 42 });
    expect(track.id).toEqual(42);
    // expect(fetch).toHaveBeenCalledWith('/tracks');
    expect(fetch.mock.calls[0][0]).toEqual('/tracks');
    expect(fetch.mock.calls[0][1].method).toEqual('POST');
  });

  it('updateTrack', async () => {
    fetch.mockResponseOnce(JSON.stringify({ id: 42 }));
    const track = await updateTrack({ id: 42 });
    expect(track.id).toEqual(42);
    // expect(fetch).toHaveBeenCalledWith('/tracks/42');
    expect(fetch.mock.calls[0][0]).toEqual('/tracks/42');
    expect(fetch.mock.calls[0][1].method).toEqual('PUT');
  });

  it('removeTrack', async () => {
    fetch.mockResponseOnce(JSON.stringify({}));
    await removeTrack(42);
    // expect(fetch).toHaveBeenCalledWith('/tracks/42');
    expect(fetch.mock.calls[0][0]).toEqual('/tracks/42');
    expect(fetch.mock.calls[0][1].method).toEqual('DELETE');
  });
});