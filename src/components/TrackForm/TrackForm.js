import './TrackForm.css';

function TrackForm(props) {

  const { track, categories, onTrackChange, onSubmit } = props;

  return (
    <form className="TrackForm" onSubmit={handleSubmit}>
      <div className="TrackForm__table">
        <div className="TrackForm__row">
          <div className="TrackForm__cell">
            <label htmlFor="title" >Title :</label>
          </div>
          <div className="TrackForm__cell">
            <input id="title" name="title" onChange={handleChange} type="text" value={track.title} />
          </div>
        </div>
        <div className="TrackForm__row">
          <div className="TrackForm__cell">
            <label htmlFor="album" >Album :</label>
          </div>
          <div className="TrackForm__cell">
            <input id="album" name="album" onChange={handleChange} type="text" value={track.album} />
          </div>
        </div>
        <div className="TrackForm__row">
          <div className="TrackForm__cell">
            <label htmlFor="band" >Band :</label>
          </div>
          <div className="TrackForm__cell">
            <input id="band" name="band" onChange={handleChange} type="text" value={track.band} />
          </div>
        </div>
        <div className="TrackForm__row">
          <div className="TrackForm__cell">
            <label htmlFor="year" >Year :</label>
          </div>
          <div className="TrackForm__cell">
            <input id="year" name="year" onChange={handleChange} type="number" value={track.year} />
          </div>
        </div>
        <div className="TrackForm__row">
          <div className="TrackForm__cell">
            <label htmlFor="poster" >Poster URL :</label>
          </div>
          <div className="TrackForm__cell">
            <input id="poster" name="poster" onChange={handleChange} type="url" value={track.poster} />
          </div>
        </div>
        <div className="TrackForm__row">
          <div className="TrackForm__cell">
            <label htmlFor="url" >Track URL :</label>
          </div>
          <div className="TrackForm__cell">
            <input id="url" name="url" onChange={handleChange} type="url" value={track.url} />
          </div>
        </div>
        <div className="TrackForm__row">
          <div className="TrackForm__cell">
            <label htmlFor="category" >Category :</label>
          </div>
          <div className="TrackForm__cell">
            <select id="category" name="category" onChange={handleChange} value={track.category} >
              <option value=""/>
              {categories.map(category => (
                <option key={category.id} value={category.id} >{category.title}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="TrackForm__row">
          <div className="TrackForm__cell">
            <label htmlFor="description" >Description :</label>
          </div>
          <div className="TrackForm__cell">
            <textarea id="description" name="description" onChange={handleChange} value={track.description} />
          </div>
        </div>
      </div>
      <div className="TrackForm__buttons">
        <input className="TrackForm__button" type="submit" value="Submit" />
      </div>
    </form>
  );

  function handleChange(event) {
    const name = event.target.name;
    let value;

    switch(name) {
      case 'category':
        value = Number(event.target.value);
        break;

      case 'year':
        value = Number(event.target.value);
        break;

      default:
        value = event.target.value;
        break;
    }

    onTrackChange(name, value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }
}

TrackForm.defaultProps = {
  track: {},
  categories: []
};

export default TrackForm;
