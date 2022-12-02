export function getArticles() {
  return fetch("http://localhost:3001/articles").then((data) => data.json());
};
