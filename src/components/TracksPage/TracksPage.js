import {useCategories} from "../../hooks/useCategories/useCategories";
import { useFilteredTracks } from '../../hooks/useFilteredTracks/useFilteredTracks';
import { removeTrack } from '../../services/track/track';

import Container from '../Container/Container';
import Filters from '../Filters/Filters';
import List from '../List/List';

import './TracksPage.css';
import Title from "../Title/Title";
import {useCallback} from "react";

const title = 'My Radio';

function TracksPage() {
    const categories = useCategories();
    const { tracks, filters, setFilters, setTracks } = useFilteredTracks();

    const handleRemove = useCallback((id) => {
        removeTrack(id)
            .then(() => setTracks(prevState => prevState.filter(track => track.id !== id)));
    }, [setTracks]);

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
                onRemove={handleRemove}
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
