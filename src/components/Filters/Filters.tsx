import { memo, useContext, useEffect, useRef } from 'react';

// @ts-ignore
import Categories from '../../contexts/Categories.ts';
// import { useDebug } from '../../hooks/useDebug/useDebug';

import './Filters.css';

function Filters(props) {
  const { filters, onFilterChanged } = props;
  const { category, title } = filters;
  const categories = useContext(Categories);
  const inputRef = useRef();
  // useDebug(props);

  useEffect(() => {
    // @ts-ignore
    inputRef.current.focus();
  }, []);


  // @ts-ignore
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
            {(categories as unknown as any[]).map(category => (
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