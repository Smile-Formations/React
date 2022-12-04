import { useEffect, useRef } from 'react';

import './Filters.css';

function Filters(props) {
  const { categories, filters, onFilterChanged } = props;
  const { category, title } = filters;
  const inputRef = useRef();

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
  categories: [],
  filters: {}
};

export default Filters;