import { useEffect, useState } from 'react';

// @ts-ignore
import { getTracks } from '../../services/track/track.ts';

export function useFilteredTracks() {
  const [tracks, setTracks] = useState([]);
  const [filters, setFilters] = useState({
    title: '',
    category: '',
    published: '',
  });

  useEffect(() => {
    getTracks().then(setTracks);
  }, []);

  const filteredTracks = tracks
    .filter(track => !filters.title || track.title.toLowerCase().indexOf(filters.title.toLowerCase()) !== -1)
    .filter(track => !filters.category || track.category === Number(filters.category));

  return { tracks: filteredTracks, filters, setFilters };
}
