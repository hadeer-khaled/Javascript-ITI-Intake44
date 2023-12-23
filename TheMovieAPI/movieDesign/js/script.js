var moviesElem = document.getElementById("movies")
var nowPlayingBtn =document.getElementById("now-playing")
var topRatedBtn =document.getElementById("top-rated")
var upComingBtn =document.getElementById("up-coming")
var popularBtn =document.getElementById("popular")
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjhjNGNkOGRhYzEzNGIxMmIwYzE3YWJiNTVlYjIwNyIsInN1YiI6IjYzNjk1NWZiMTY4NGY3MDA3YTliZjRkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XiVTglc3cbq67hBraVAkJfw7sNlbeUh_aXcfaHMtdR4'
    }
  };
nowPlayingFilms();  

nowPlayingBtn.addEventListener("click" , nowPlayingFilms)
topRatedBtn.addEventListener("click" , ()=>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)

      .then(response => response.json())
      .then(response =>{
          var films = response.results
          console.log(films)
          moviesElem.innerHTML = ""
          films.forEach(film => {  
              moviesElem.innerHTML += 
              `
              <div  class="film">
              <img  src="https://image.tmdb.org/t/p/original/${film.backdrop_path}" alt="">
              <div class="cover">
                  <h2>${film.title}</h2>
                  <p class="info-p">${film.overview}</p>
                  <p class="rate">Rate: ${film.vote_average}</p>
                  <p class="date">Date: ${film.release_date}</p>
              </div>
              </div>
              `
          });
  
      } )
      .catch(err => console.error(err));
})
popularBtn.addEventListener("click" , ()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response =>{
          var films = response.results
          console.log(films)
          moviesElem.innerHTML = ""
          films.forEach(film => {  
              moviesElem.innerHTML += 
              `
              <div  class="film">
              <img  src="https://image.tmdb.org/t/p/original/${film.backdrop_path}" alt="">
              <div class="cover">
                  <h2>${film.title}</h2>
                  <p class="info-p">${film.overview}</p>
                  <p class="rate">Rate: ${film.vote_average}</p>
                  <p class="date">Date: ${film.release_date}</p>
              </div>
              </div>
              `
          });
  
      } )
      .catch(err => console.error(err));
})
upComingBtn.addEventListener("click" , ()=>{
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response =>{
          var films = response.results
          console.log(films)
          moviesElem.innerHTML = ""
          films.forEach(film => {  
              moviesElem.innerHTML += 
              `
              <div  class="film">
              <img  src="https://image.tmdb.org/t/p/original/${film.backdrop_path}" alt="">
              <div class="cover">
                  <h2>${film.title}</h2>
                  <p class="info-p">${film.overview}</p>
                  <p class="rate">Rate: ${film.vote_average}</p>
                  <p class="date">Date: ${film.release_date}</p>
              </div>
              </div>
              `
          });
  
      } )
      .catch(err => console.error(err));
})

function nowPlayingFilms(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
          .then(response => response.json())
          .then(response =>{
              var films = response.results
              console.log(films)
              moviesElem.innerHTML = " " 
              films.forEach(film => {  
                  moviesElem.innerHTML += 
                  `
                  <div  class="film">
                  <img  src="https://image.tmdb.org/t/p/original/${film.backdrop_path}" alt="">
                  <div class="cover">
                      <h2>${film.title}</h2>
                      <p class="info-p">${film.overview}</p>
                      <p class="rate">Rate: ${film.vote_average}</p>
                      <p class="date">Date: ${film.release_date}</p>
                  </div>
                  </div>
                  `
              });
      
          } )
          .catch(err => console.error(err));
}
