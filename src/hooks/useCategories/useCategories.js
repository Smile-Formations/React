import { useEffect, useState } from 'react';

import { getCategories } from "../../services/category/category";

export function useCategories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(categories => setCategories(categories));
    }, []);

    return categories;
}