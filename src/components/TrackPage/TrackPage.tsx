import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// @ts-ignore
import { useTrack } from '../../hooks/useTrack/useTrack.ts';
// @ts-ignore
import { addTrack, updateTrack } from '../../services/track/track.ts';

// @ts-ignore
import TrackForm from '../TrackForm/TrackForm.tsx';
// @ts-ignore
import Container from '../Container/Container.tsx';
// @ts-ignore
import Title from '../Title/Title.tsx';

const linkProps = { children: 'Back', to: '/' };

function TrackPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [track, setTrack] = useTrack(id);

    const handleTrackChange = useCallback((name, value) =>
            setTrack(prevState => ({
                ...prevState,
                [name]: value
            }))
        , [setTrack]);

    const handleSubmit = useCallback(() =>
            id
                ? updateTrack(track)
                : addTrack(track).then(track => navigate(`/track/${track.id}`))
        , [track, id, navigate]);

    const title = id
        ? `Edit track (${id})`
        : 'Add new track';

    return (
        <Container>
            <Title linkProps={linkProps} title={title} />
            <TrackForm
                track={track}
                onTrackChange={handleTrackChange}
                onSubmit={handleSubmit}
            />
        </Container>
    );
}

export default TrackPage;
