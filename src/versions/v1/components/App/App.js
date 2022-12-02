import { useCategories } from '../../hooks/useCategories/useCategories';
import { useFilteredTracks } from '../../hooks/useFilteredTracks/useFilteredTracks';

import Container from '../Container/Container';
import Filters from '../Filters/Filters';
import List from '../List/List';

function App() {
  const categories = useCategories();
  const { tracks, filters, setFilters } = useFilteredTracks();

  return (
    <Container>
      <Filters
        categories={categories}
        filters={filters}
        onFilterChanged={handleFilterChanged}
      />
      <List
        tracks={tracks}
        categories={categories}
      />
    </Container>
  );

  function handleFilterChanged(filter, value) {
    setFilters((prevState) => ({
      ...prevState,
      [filter]: value,
    }));
  }
}

export default App;
