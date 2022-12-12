

function fetchMovies() {
    fetch("http://localhost:3000/films", { method: "GET"})
    .then((response) => response.json())
    .then((data) {

    })
}