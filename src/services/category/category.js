export function getCategories() {
    return fetch("http://localhost:3001/categories").then((data) => data.json());
}