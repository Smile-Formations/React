import { useCallback } from 'react';

// @ts-ignore
import { useFilteredTracks } from '../../hooks/useFilteredTracks/useFilteredTracks.ts';
// @ts-ignore
import { removeTrack } from '../../services/track/track.ts';

// @ts-ignore
import Container from '../Container/Container.tsx';
// @ts-ignore
import Filters from '../Filters/Filters.tsx';
// @ts-ignore
import List from '../List/List.tsx';
// @ts-ignore
import Title from '../Title/Title.tsx';

const title = 'My Radio';
const linkProps = { children: 'Add new track', to: '/track' };

function TracksPage() {
    // @ts-ignore
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
        <Container>
            <Title linkProps={linkProps} title={title} />
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
