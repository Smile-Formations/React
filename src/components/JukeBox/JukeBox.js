import "./JukeBox.css"

function JukeBox(props) {

    // Destructing.
    const { track } = props;
    // Equivalent without destructuring:
    // const track = props.track;

    return (
        <div className="JukeBox">
            <div>{track.title}</div>
            <div>{track.category}</div>
        </div>
    );
}

export default JukeBox;