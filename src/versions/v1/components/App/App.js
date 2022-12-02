import { useCategories } from '../../hooks/useCategories/useCategories';
import { useFilteredArticles } from '../../hooks/useFilteredArticles/useFilteredArticles';

import Container from '../Container/Container';
import Filters from '../Filters/Filters';
import List from '../List/List';

function App() {
  const categories = useCategories();
  const { articles, filters, setFilters } = useFilteredArticles();

  return (
    <Container>
      <Filters
        categories={categories}
        filters={filters}
        onFilterChanged={handleFilterChanged}
      />
      <List
        articles={articles}
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
