import "./JukeBox.css"

function JukeBox(props) {

    const { track } = props;

    return (
        <div className="JukeBox">
            <div>{track.title}</div>
            <div>{track.category}</div>
        </div>
    );
}

export default JukeBox;