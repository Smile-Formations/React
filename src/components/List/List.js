import JukeBox from "../JukeBox/JukeBox";
import "./List.css"

function List(props) {

    const { tracks } = props;

    return (
        <div className="List">
            {tracks.map(track => (
                <JukeBox track={track} key={track.id} />
            ))}
        </div>
    );
}

export default List;