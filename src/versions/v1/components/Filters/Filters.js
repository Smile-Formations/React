import { useEffect, useRef } from 'react';

import './Filters.css';

function Filters(props) {
  const { categories, filters, onFilterChanged } = props;
  const { category, published, title } = filters;
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
          <option value="" ></option>
          {categories.map(category => (
            <option key={category.id} value={category.id} >{category.title}</option>
          ))}
        </select>
      </div>
      <div className="Filters__cell">
        <label className="Filters__label">
          <input checked={published === ''} name="published" onChange={handleChange} type="radio" value="" />
          All
        </label>
        <label className="Filters__label">
          <input checked={published === 'published'} name="published" onChange={handleChange} type="radio" value="published" />
          Published
        </label>
        <label className="Filters__label">
          <input checked={published === 'draft'} name="published" onChange={handleChange} type="radio" value="draft" />
          Draft
        </label>
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