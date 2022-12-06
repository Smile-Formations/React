export function getTracks() {
  return fetch("http://localhost:3001/tracks").then((data) => data.json());
};
