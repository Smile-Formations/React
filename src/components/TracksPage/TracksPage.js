import { useCallback } from 'react';

import { useFilteredTracks } from '../../hooks/useFilteredTracks/useFilteredTracks';
import { removeTrack } from '../../services/track/track';

import Container from '../Container/Container';
import Filters from '../Filters/Filters';
import List from '../List/List';
import Title from '../Title/Title';

const title = 'My Radio';
const linkProps = { children: 'Add new track', to: '/track' };

function TracksPage() {
  const { tracks, filters, setTracks, setFilters } = useFilteredTracks();

  const handleFilterChanged = useCallback((filter, value) =>
          setFilters((prevState) => ({
            ...prevState,
            [filter]: value,
          }))
      , [setFilters]);

  const handleRemove = useCallback((id) => {
    // Naive (ensure new list is sync with BE)
    // removeTrack(id)
    //   .then(() => getTracks())
    //   .then(setTracks);

    // Optimistic (good when BE is slow)
    // setTracks(prevState => prevState.filter(track => track.id !== id));
    // removeTrack(id)
    //   .catch(() => getTracks().then(setTracks));

    // Classic
    removeTrack(id)
        .then(() => setTracks(prevState => prevState.filter(track => track.id !== id)));
  }, [setTracks]);

  return (
      <>
        <Title linkProps={linkProps} title={title} />
        <Container>
          <Filters
              filters={filters}
              onFilterChanged={handleFilterChanged}
          />
          <List
              tracks={tracks}
              onRemove={handleRemove}
          />
        </Container>
      </>
  );
}

export default TracksPage;
