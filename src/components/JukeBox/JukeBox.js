import classnames from 'classnames';
import "./JukeBox.css"
import {useState} from "react";

function JukeBox(props) {

    const [selected, setSelected] = useState(false);
    const { track } = props;

    function handleClick() {
        setSelected(prevState => !prevState);
    }

    return (
        <div className={classnames('JukeBox', {isSelected: selected})} onClick={handleClick}>
            <div>{track.title}</div>
            <div>{track.category}</div>
        </div>
    );
}

export default JukeBox;