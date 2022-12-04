import { memo, useContext, useEffect, useRef } from 'react';

import Categories from '../../contexts/Categories';
// import { useDebug } from '../../hooks/useDebug/useDebug';

import './Filters.css';

function Filters(props) {
  const { filters, onFilterChanged } = props;
  const { category, title } = filters;
  const categories = useContext(Categories);
  const inputRef = useRef();
  // useDebug(props);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="Filters">
      <div className="Filters__cell">
        <input
          name="title"
          onChange={handleChange}
          type="text"
          ref={inputRef}
          value={title}
        />
      </div>
      <div className="Filters__cell" >
        <select name="category" onChange={handleChange} value={category} >
          <option value="" />
          {categories.map(category => (
            <option key={category.id} value={category.id} >{category.title}</option>
          ))}
        </select>
      </div>
    </div>
  );

  function handleChange(event) {
    const { name, value } = event.target;
    onFilterChanged(name, value);
  }
}

Filters.defaultProps = {
  filters: {}
};

export default memo(Filters);