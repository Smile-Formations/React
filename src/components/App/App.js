import { useCategories } from '../../hooks/useCategories/useCategories';
import { useFilteredTracks } from '../../hooks/useFilteredTracks/useFilteredTracks';

import Filters from '../Filters/Filters';
import Container from '../Container/Container';

import './App.css';

function App() {

    const categories = useCategories();
    const { tracks, filters, setFilters } = useFilteredTracks();

    return (
        <div className="App__container">
            <Filters
                categories={categories}
                filters={filters}
                onFilterChanged={handleFilterChanged}
            />
            <Container />
        </div>
    );

    function handleFilterChanged(filter, value) {
        // Mettre filter entre [] permet à JS d'interpréter la string issue de filter comme une clé de l'objet JSON
        // console.log(filter);
        setFilters((prevState) => ({...prevState, [filter]: value}));
    }
}

export default App;