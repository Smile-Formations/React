import { memo, useContext, useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Categories from '../../contexts/Categories';
// import { useDebug } from '../../hooks/useDebug/useDebug';

import './JukeBox.css';

function JukeBox(props) {
  const { track, onRemove } = props;
  const [selected, setSelected] = useState(false);
  const categories = useContext(Categories);
  // useDebug(props);
  
  const category = categories.find(category => category.id === track.category);

  return (
      <div className={classnames('Article', {isSelected: selected})} onClick={handleClick} >
        <div className="Article__cell">{track.title}</div>
        <div className="Article__cell">{category ? category.title : track.category}</div>
        <div className="Article__cell">
          <Link className="Article__link" to={`/track/${track.id}`} >edit</Link>
        </div>
        <div className="Article__cell">
          <button className="Article__link" onClick={handleRemove} >remove</button>
        </div>
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

export default memo(JukeBox);
