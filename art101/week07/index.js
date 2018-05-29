// An API for fetching information about Studio Ghibli movies
const API_URL = 'https://ghibliapi.herokuapp.com/films';

let movies;

// Use Ajax to fetch movies from ghibliapi. The content is
// always the same, so we only have to do this once
$.get(API_URL, (res) => {
  movies = res;
  console.log('Successfully fetched ' + movies.length + ' movies')
});

// On DOM load:
$(() => {
  const $button = $('#random-movie');
  const $output = $('#output');

  // On button click:
  $button.click(() => {
    // If movies are loaded
    if (movies && movies.length > 0) {
      // Choose a random movie from the movies array
      const randomIndex = Math.floor(movies.length * Math.random());
      const randomMovie = movies[randomIndex];

      // Show the title and description in the #output element
      $output.html('<strong>' + randomMovie.title + '</strong><br/>' + randomMovie.description);
    }
  });
});
