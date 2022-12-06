import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Title.css';

function Title(props) {
  const { linkProps, title } = props;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="Title">
      <h1 className="Title__title">{title}</h1>
      {linkProps && (<Link className="Title__button" {...linkProps} />)}
    </div>
  );
}

export default Title;
