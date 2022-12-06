import JukeBox from '../JukeBox/JukeBox';

import './List.css';

function List(props) {

  const { tracks, categories } = props;

  return (
    <div className="List">
      {tracks.map(track => (
        <JukeBox track={track} categories={categories} key={track.id} />
      ))}
    </div>
  );
}

List.defaultProps = {
  tracks: [],
  categories: []
};

export default List;
