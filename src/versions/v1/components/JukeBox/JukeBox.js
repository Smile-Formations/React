import { useState } from 'react';
import classnames from 'classnames';

import './JukeBox.css';

function JukeBox(props) {
  const { track, categories } = props;
  const [selected, setSelected] = useState(false);
  
  const category = categories.find(category => category.id === track.category);

  return (
    <div className={classnames('JukeBox', {isSelected: selected})} onClick={handleClick} >
      <div className="JukeBox__cell">{track.title}</div>
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
