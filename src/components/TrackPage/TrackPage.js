import {Link, useParams} from 'react-router-dom';

import { useTrack } from '../../hooks/useTrack/useTrack';
import { addTrack, updateTrack } from '../../services/track/track';

import TrackForm from '../TrackForm/TrackForm';
import Container from '../Container/Container';

function TrackPage(props) {

    const { categories } = props;
    const { id } = useParams();
    const [track, setTrack] = useTrack(id);

    return (
        <Container>
            <Link to="/">
                <span className="TracksPage__button">Back</span>
            </Link>
            <TrackForm
                track={track}
                categories={categories}
                onTrackChange={handleTrackChange}
                onSubmit={handleSubmit}
            />
        </Container>
    );

    function handleTrackChange(name, value) {
        setTrack(prevState => ({...prevState, [name]: value }));
    }

    function handleSubmit() {
        if (id) {
            updateTrack(track);
        } else {
            addTrack(track);
        }
    }
}

TrackPage.defaultProps = {
    categories: []
};

export default TrackPage;