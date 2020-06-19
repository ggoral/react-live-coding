const ENDPOINT = 'http://localhost:8000'

export default function getFavs ({jwt}) {
  return fetch(`${ENDPOINT}/favs`, {
    method: "GET",
    headers: {
      'Authorization': jwt,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Response is not ok");
      return res.json();
    })
    .then((res) => {
      const { favs } = res;
      return favs
    })
}