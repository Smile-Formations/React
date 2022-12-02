import { useEffect, useState } from 'react';

import { getTracks } from '../../services/track/track';

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
    .filter(track => !filters.title || track.title.indexOf(filters.title) !== -1)
    .filter(track => !filters.category || track.category === Number(filters.category))
    .filter(track =>
      !filters.published ||
      (filters.published === 'published' && track.published === true) ||
      (filters.published === 'draft' && track.published === false)
    );

  return { tracks: filteredTracks, filters, setTracks, setFilters };
}
