// @ts-ignore
import { act, renderHook } from '@testing-library/react-hooks';

import * as trackService from '../../services/track/track';

import { useFilteredTracks } from './useFilteredTracks';

jest.mock('../../services/track/track');

describe('useFilteredTracks hook', () => {
  beforeEach(() => {
    jest.spyOn(trackService, 'getTracks');
    // @ts-ignore
    trackService.getTracks.mockReturnValue(new Promise(resolve => resolve([
      {
        "id": 1,
        "title": "JukeBox 1",
        "category": 1,
        "published": true,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        "id": 2,
        "title": "JukeBox 2",
        "category": 2,
        "published": true,
        "description": "Donec malesuada enim ac ipsum dictum placerat."
      },
      {
        "id": 3,
        "title": "JukeBox 3",
        "category": 1,
        "published": false,
        "description": "Phasellus sit amet bibendum augue."
      },
      {
        "id": 4,
        "title": "JukeBox 4",
        "category": 1,
        "published": false,
        "description": "Lorem ipsum dolor sit amet."
      }
    ])));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loads the tracks', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useFilteredTracks()
    );
    expect(trackService.getTracks).toHaveBeenCalled();
    expect(result.current.tracks.length).toEqual(0);
    expect(result.current.filters.category).toEqual('');
    await waitForNextUpdate();
    expect(result.current.tracks.length).toEqual(4);
  });

  it('filters the tracks', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useFilteredTracks()
    );
    await waitForNextUpdate();
    act(() => result.current.setFilters({
      category: '1',
      title: 'Article',
      published: 'published'
    }));
    expect(result.current.tracks.length).toEqual(1);
  });

  it('updates the tracks', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useFilteredTracks()
    );
    await waitForNextUpdate();
    act(() => result.current.setArticles([
      {
        "id": 1,
        "title": "JukeBox 1",
        "category": 1,
        "published": true,
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ]));
    expect(result.current.tracks.length).toEqual(1);
  });
});

