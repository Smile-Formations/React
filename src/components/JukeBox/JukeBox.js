import { useState } from 'react';
import classnames from 'classnames';

import './JukeBox.css';
import {Link} from "react-router-dom";

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
                    <div className="JukeBox__Title">
                        {track.title}
                        <div className="JukeBox__actions">
                            <Link className="JukeBox__link" to={`/track/${track.id}`} >
                                <svg className="JukeBox__svg JukeBox__edit" viewBox="0 0 24 24">
                                    <path d="M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828q0.281-0.281 0.703-0.281t0.703 0.281l2.344 2.344q0.281 0.281 0.281 0.703t-0.281 0.703zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
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
