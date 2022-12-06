import './TrackForm.css';

function TrackForm(props) {

    const { categories } = props;

    return (
        <form className="TrackForm">
            <div className="TrackForm__table">
                <div className="TrackForm__row">
                    <div className="TrackForm__cell">
                        <label htmlFor="title" >Title :</label>
                    </div>
                    <div className="TrackForm__cell">
                        <input id="title" name="title" type="text" />
                    </div>
                </div>
                <div className="TrackForm__row">
                    <div className="TrackForm__cell">
                        <label htmlFor="album" >Album :</label>
                    </div>
                    <div className="TrackForm__cell">
                        <input id="album" name="album" type="text" />
                    </div>
                </div>
                <div className="TrackForm__row">
                    <div className="TrackForm__cell">
                        <label htmlFor="band" >Band :</label>
                    </div>
                    <div className="TrackForm__cell">
                        <input id="band" name="band" type="text" />
                    </div>
                </div>
                <div className="TrackForm__row">
                    <div className="TrackForm__cell">
                        <label htmlFor="year" >Year :</label>
                    </div>
                    <div className="TrackForm__cell">
                        <input id="year" name="year" type="number" />
                    </div>
                </div>
                <div className="TrackForm__row">
                    <div className="TrackForm__cell">
                        <label htmlFor="poster" >Poster URL :</label>
                    </div>
                    <div className="TrackForm__cell">
                        <input id="poster" name="poster" type="url" />
                    </div>
                </div>
                <div className="TrackForm__row">
                    <div className="TrackForm__cell">
                        <label htmlFor="url" >Track URL :</label>
                    </div>
                    <div className="TrackForm__cell">
                        <input id="url" name="url" type="url" />
                    </div>
                </div>
                <div className="TrackForm__row">
                    <div className="TrackForm__cell">
                        <label htmlFor="category" >Category :</label>
                    </div>
                    <div className="TrackForm__cell">
                        <select id="category" name="category" >
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
                        <textarea id="description" name="description" />
                    </div>
                </div>
            </div>
            <div className="TrackForm__buttons">
                <input className="TrackForm__button" type="submit" value="Submit" />
            </div>
        </form>
    );
}

TrackForm.defaultProps = {
    track: {},
    categories: []
};

export default TrackForm;