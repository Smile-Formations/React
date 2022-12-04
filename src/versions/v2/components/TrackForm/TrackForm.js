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
        <div className="TrackForm__row">
          <div className="TrackForm__cell">
            <label htmlFor="published" >Published :</label>
          </div>
          <div className="TrackForm__cell">
            <input checked={track.published} id="published" name="published" onChange={handleChange} type="checkbox" />
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

      case 'published':
        value = event.target.checked;
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
