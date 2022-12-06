import JukeBox from '../JukeBox/JukeBox';

import './List.css';

function List(props) {
  const { tracks, categories, onRemove } = props;
  return (
      <div className="List">
        {tracks.map(track => (
            <JukeBox
                track={track}
                key={track.id}
                categories={categories}
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