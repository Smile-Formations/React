import JukeBox from '../JukeBox/JukeBox';

import './List.css';

function List(props) {
  const { tracks, onRemove } = props;
  return (
      <div className="List">
        {tracks.map(track => (
            <JukeBox
                track={track}
                key={track.id}
                onRemove={onRemove}
            />
        ))}
      </div>
  );
}

List.defaultProps = {
  tracks: []
};

export default List;
