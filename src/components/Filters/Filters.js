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
          <label className="Filters__label" htmlFor='title'>Search</label>
          <input
              name="title"
              onChange={handleChange}
              type="text"
              ref={inputRef}
              value={title}
              placeholder="Search by track title"
          />
        </div>
        <div className="Filters__cell" >
          <label className="Filters__label" htmlFor='category'>Category</label>
          <select name="category" onChange={handleChange} value={category} >
            <option value="" >All</option>
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