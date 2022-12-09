import fetchMock from "jest-fetch-mock";

import { addTrack, getTrack, getTracks, removeTrack, updateTrack } from './track';

fetchMock.enableMocks();

describe('track service', () => {
  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks();
  });

  it('getTrack', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify({ id: 42 }));
    const track = await getTrack(42);
    expect(track.id).toEqual(42);
    expect(fetch).toHaveBeenCalledWith('/tracks/42');
  });
  
  it('getTracks', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify([{ id: 42 }]));
    const tracks = await getTracks();
    expect(tracks.length).toEqual(1);
    expect(fetch).toHaveBeenCalledWith('/tracks');
  });

  it('addTrack', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify({ id: 42 }));
    const track = await addTrack({ id: 42 });
    expect(track.id).toEqual(42);
    // expect(fetch).toHaveBeenCalledWith('/tracks');
    // @ts-ignore
    expect(fetch.mock.calls[0][0]).toEqual('/tracks');
    // @ts-ignore
    expect(fetch.mock.calls[0][1].method).toEqual('POST');
  });

  it('updateTrack', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify({ id: 42 }));
    const track = await updateTrack({ id: 42 });
    expect(track.id).toEqual(42);
    // expect(fetch).toHaveBeenCalledWith('/tracks/42');
    // @ts-ignore
    expect(fetch.mock.calls[0][0]).toEqual('/tracks/42');
    // @ts-ignore
    expect(fetch.mock.calls[0][1].method).toEqual('PUT');
  });

  it('removeTrack', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify({}));
    await removeTrack(42);
    // expect(fetch).toHaveBeenCalledWith('/tracks/42');
    // @ts-ignore
    expect(fetch.mock.calls[0][0]).toEqual('/tracks/42');
    // @ts-ignore
    expect(fetch.mock.calls[0][1].method).toEqual('DELETE');
  });
});
