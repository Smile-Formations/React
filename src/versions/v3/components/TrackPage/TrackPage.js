import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useTrack } from '../../hooks/useTrack/useTrack';
import { addTrack, updateTrack } from '../../services/track/track';

import TrackForm from '../TrackForm/TrackForm';
import Container from '../Container/Container';
import Title from '../Title/Title';

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
      <>
        <Title linkProps={linkProps} title={title} />
        <Container>
          <TrackForm
              track={track}
              onTrackChange={handleTrackChange}
              onSubmit={handleSubmit}
          />
        </Container>
      </>
  );
}

export default TrackPage;
