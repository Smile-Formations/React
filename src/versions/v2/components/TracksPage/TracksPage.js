import { useFilteredTracks } from '../../hooks/useFilteredTracks/useFilteredTracks';
import { removeTrack } from '../../services/track/track';

import Container from '../Container/Container';
import Filters from '../Filters/Filters';
import List from '../List/List';
import Title from '../Title/Title';

const title = 'My Radio';

function TracksPage(props) {
  const { categories } = props;
  const { tracks, filters, setTracks, setFilters } = useFilteredTracks();

  return (
    <div>
      <Title linkProps={{children: 'Add new track', to: '/track'}} title={title}/>
      <Container>
        <Filters
          categories={categories}
          filters={filters}
          onFilterChanged={handleFilterChanged}
        />
        <List
          tracks={tracks}
          categories={categories}
          onRemove={handleRemove}
        />
      </Container>
    </div>
  );

  function handleFilterChanged(filter, value) {
    setFilters((prevState) => ({
      ...prevState,
      [filter]: value,
    }));
  }

  function handleRemove (id) {
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
  }
}

TracksPage.defaultProps = {
  categories: []
};

export default TracksPage;
