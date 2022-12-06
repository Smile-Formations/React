export function addTrack(track) {
  return fetch("http://localhost:3001/tracks", {
    body: JSON.stringify(track),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  }).then((data) => data.json());
}

export function getTrack(id) {
  return fetch(`http://localhost:3001/tracks/${id}`).then((data) => data.json());
}

export function getTracks() {
  return fetch("http://localhost:3001/tracks").then((data) => data.json());
}

export function removeTrack(id) {
  return fetch(`http://localhost:3001/tracks/${id}`, {
    method: "DELETE",
  }).then((data) => data.json());
}

export function updateTrack(track) {
  return fetch(`http://localhost:3001/tracks/${track.id}`, {
    body: JSON.stringify(track),
    headers: { "Content-Type": "application/json" },
    method: "PUT",
  }).then((data) => data.json());
}
