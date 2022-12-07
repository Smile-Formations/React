import { memo, useContext, useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Categories from '../../contexts/Categories';
//import { useDebug } from '../../hooks/useDebug/useDebug';

import './JukeBox.css';

function JukeBox(props) {
    const { track, onRemove } = props;
    const [selected, setSelected] = useState(false);
    const categories = useContext(Categories);
    //console.log(useDebug(props));

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
                            <span className="JukeBox__link" onClick={handleRemove} >
                            <svg className="JukeBox__svg JukeBox__bin" viewBox="0 0 24 24">
                                <path d="M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z"/>
                            </svg>
                        </span>
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

    function handleRemove(event) {
        event.preventDefault();
        onRemove(track.id);
    }
}

JukeBox.defaultProps = {
    track: {}
};

export default JukeBox;
