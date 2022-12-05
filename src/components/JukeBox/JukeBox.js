import { useState } from 'react';
import classnames from 'classnames';

import './JukeBox.css';

function JukeBox(props) {

    const { track, categories } = props;
    const [selected, setSelected] = useState(false);

    const category = categories.find(category => category.id === track.category);

    return (
        <div className={classnames('JukeBox', {isSelected: selected})} onClick={handleClick} >
            <div className="JukeBox__cell">
                <a href={track.url} target="_blank" className="JukeBox__sub-cell" style={{backgroundImage: `url(${track.poster})`}} rel="noreferrer" >
                    <svg className="JukeBox__sub-cell__icon" viewBox="0 0 24 24">
                        <path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"/>
                    </svg>
                </a>
                <div className="JukeBox__sub-cell" title={track.description}>
                    {track.title}
                    <span className="JukeBox__details">{track.band} ({track.album} - {track.year})</span>
                </div>
            </div>
            <div className="JukeBox__cell">{category ? category.title : track.category}</div>
        </div>
    );

    function handleClick() {
        setSelected(prevState => !prevState);
    }
}

JukeBox.defaultProps = {
    track: {},
    categories: []
};

export default JukeBox;