const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
    if(id){
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY ="api_key=e6ea4ad3e339ac7c6ed60152c67b40be";
const BASE_URL = "https://api.themoviedb.org/3";

const singleMovie = BASE_URL + '/movie/'+id+'?' + API_KEY;
    
fetch(singleMovie).then(res => res.json()).then(data => {
    console.log(data)
  
  document.querySelector('#image_path').setAttribute('src',IMG_URL+data.poster_path)

  document.querySelector('.movie-title').textContent = data.original_title;

  document.querySelector('.movie-ratings').textContent = data.vote_average;

  document.querySelector('.release_date').textContent = data.release_date;

  document.querySelector('.plot').textContent = data.overview;
    //showMovies(data.results)
})
    }




