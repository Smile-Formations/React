import { useEffect, useState } from 'react';

// @ts-ignore
import { getCategories } from '../../services/category/category.ts';

export function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);
  
  return categories;
}
