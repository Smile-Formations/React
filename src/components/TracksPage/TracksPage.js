import { useFilteredTracks } from '../../hooks/useFilteredTracks/useFilteredTracks';
import { removeTrack } from '../../services/track/track';

import Container from '../Container/Container';
import Filters from '../Filters/Filters';
import List from '../List/List';

import './TracksPage.css';
import Title from "../Title/Title";

const title = 'My Radio';

function TracksPage() {
    const { tracks, filters, setFilters, setTracks } = useFilteredTracks();

    const handleRemove = (id) => {
        removeTrack(id).then(() => setTracks(prevState => prevState.filter(track => track.id !== id)));
    }

    const handleFilterChanged = (filter, value) => {
        // Mettre filter entre [] permet à JS d'interpréter la string issue de filter comme une clé de l'objet JSON
        // console.log(filter);
        setFilters((prevState) => ({...prevState, [filter]: value }));
    }

    return (
        <Container>
            <Title linkProps={{children: 'Add new track', to: '/track'}} title={title}/>
            <Filters
                filters={filters}
                onFilterChanged={handleFilterChanged}
            />
            <List
                tracks={tracks}
                onRemove={handleRemove}
            />
        </Container>
    );
}

export default TracksPage;
