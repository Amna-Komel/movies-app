// //API key
// const API_KEY='api_key=e6ea4ad3e339ac7c6ed60152c67b40be';
// const URL='https://api.themoviedb.org/3';
// const API_URL= URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY
// const IMG_URL='https://image.tmdb.org/t/p/w500';
// const searchURL= URL + '/search/movie?' + API_KEY;

// const main=document.getElementById('main');
// const searchButton = document.getElementById("search-button");
// const searchInput = document.getElementById("search-input");

// // Fetching data for movie cards
// let moviesData = localStorage.getItem('moviesData');
// if (moviesData) {
//   moviesData = JSON.parse(moviesData);
//   showMovies(moviesData);
// } else {
//   getMovies(API_URL);
// }

// function getMovies(url){
//   fetch(url)
//     .then(res=> res.json())
//     .then(data=> {
//       console.log(data.results);
//       showMovies(data.results);
//       // Store movies data in local storage
//       localStorage.setItem('moviesData', JSON.stringify(data.results));
//     })
// }

// function showMovies(data){
//   main.innerHTML = '';

//   data.forEach(movie => {
//     const {title, poster_path, vote_average, release_date, overview, id} = movie;

//     function redirectPage() {
//       window.location.href=`movie-details.html?id=${id}`;
//     }

//     const movieEl=document.createElement('div')
//     movieEl.classList.add('movie');
//     movieEl.onclick=redirectPage;
//     movieEl.innerHTML = `
//       <img src="${IMG_URL+poster_path}" alt="${title}">
//       <div class="movie-info">
//         <h3>${title}</h3>
//         <div class="detail">
//           <span class="${getColor(vote_average)}">${vote_average}</span>
//           <span class="release-date">${release_date}</span>
//         </div>
//       </div>
//       <div class="overview">
//         <h3>Plot</h3>
//         ${overview}
//       </div>
//     `

//     main.appendChild(movieEl);
//   })
// }

// function getColor(vote){
//   if(vote>=7.5){
//     return 'green'
//   }
//   else if(vote>=5){
//     return 'orange'
//   }
//   else{
//     return 'red'
//   }
// }

// searchButton.addEventListener("click", (e)=> {
//   const searchTerm = searchInput.value;
//   // Do something with the search term, such as perform a search using an API
//   if(searchTerm){
//     getMovies(searchURL + '&query='+ searchTerm)
//   }else{
//     getMovies(API_URL);
//   }
//   // console.log(searchTerm);
// });
//API key
const API_KEY='api_key=e6ea4ad3e339ac7c6ed60152c67b40be';
const URL='https://api.themoviedb.org/3';
const API_URL= URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY
const IMG_URL='https://image.tmdb.org/t/p/w500';
const searchURL= URL + '/search/movie?' + API_KEY;

const main=document.getElementById('main');
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

// Fetching data for movie cards
let moviesData = localStorage.getItem('moviesData');
if (moviesData) {
  moviesData = JSON.parse(moviesData);
  showMovies(moviesData);
} else {
  getMovies(API_URL);
}

function getMovies(url){
  fetch(url)
    .then(res=> res.json())
    .then(data=> {
      console.log(data.results);
      if (data.results.length === 0) {
        alert("No movies found with the given criteria.");
      }
      showMovies(data.results);
      // Store movies data in local storage
      localStorage.setItem('moviesData', JSON.stringify(data.results));
    })
}

function showMovies(data){
  main.innerHTML = '';

  data.forEach(movie => {
    const {title, poster_path, vote_average, release_date, overview, id} = movie;

    function redirectPage() {
      window.location.href=`movie-details.html?id=${id}`;
    }

    const movieEl=document.createElement('div')
    movieEl.classList.add('movie');
    movieEl.onclick=redirectPage;
    movieEl.innerHTML = `
      <img src="${IMG_URL+poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <div class="detail">
          <span class="${getColor(vote_average)}">${vote_average}</span>
          <span class="release-date">${release_date}</span>
        </div>
      </div>
      <div class="overview">
        <h3>Plot</h3>
        ${overview}
      </div>
    `

    main.appendChild(movieEl);
  })
}

function getColor(vote){
  if(vote>=7.5){
    return 'green'
  }
  else if(vote>=5){
    return 'orange'
  }
  else{
    return 'red'
  }
}

searchButton.addEventListener("click", (e)=> {
  const searchTerm = searchInput.value;
  // Do something with the search term, such as perform a search using an API
  if(searchTerm){
    getMovies(searchURL + '&query='+ searchTerm)
  }else{
    getMovies(API_URL);
  }
});
