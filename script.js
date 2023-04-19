// Get the movie details elements
const movieTitle = document.getElementById("movie-title");
const moviePoster = document.getElementById("movie-poster");
const movieRatings = document.getElementById("movie-ratings");
const moviePlot = document.getElementById("plot");

// Function to display the next movie details
function displayNextMovie(movies) {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const movie = movies[randomIndex];
  movieTitle.textContent = movie.title;
  moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  movieRatings.textContent = `Ratings: ${movie.vote_average}`;
  moviePlot.textContent = `Plot: ${movie.overview}`;

  // Store the clicked movie ID in local storage
  movieTitle.addEventListener('click', () => {
    localStorage.setItem('clickedMovieId', movie.id);
    window.location.href=`movie-details.html?id=${movie.id}`; // Redirect to movie-details.html
  });
}

// Fetch top rated movies from TMDB API
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e6ea4ad3e339ac7c6ed60152c67b40be')
  .then(response => response.json())
  .then(data => {
    const movies = data.results.slice(0, 7); // Get top 7 movies
    // Call the function initially
    displayNextMovie(movies);
    // Update the movie details every 5 seconds
    setInterval(() => displayNextMovie(movies), 3000);
  })
  .catch(error => console.error(error));
