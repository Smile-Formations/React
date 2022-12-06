import {useCategories} from "../../hooks/useCategories/useCategories";
import { useFilteredTracks } from '../../hooks/useFilteredTracks/useFilteredTracks';

import Container from '../Container/Container';
import Filters from '../Filters/Filters';
import List from '../List/List';

import './TracksPage.css';
import {Link} from "react-router-dom";
import Title from "../Title/Title";

const title = 'My Radio';

function TracksPage() {
    const categories = useCategories();
    const { tracks, filters, setFilters } = useFilteredTracks();

    return (
        <Container>
            <Title linkProps={{children: 'Add new track', to: '/track'}} title={title}/>
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
        // Mettre filter entre [] permet à JS d'interpréter la string issue de filter comme une clé de l'objet JSON
        // console.log(filter);
        setFilters((prevState) => ({...prevState, [filter]: value }));
    }
}

export default TracksPage;
