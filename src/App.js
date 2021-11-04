import React from 'react'
import { useEffect, useState } from 'react';
import MovieList from './Components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieSearch from './Components/movieSearch';
import AddMovie from './Components/addMovie';
import Movie from './Components/Movie';
import MovieDetail from './Components/MovieDetail';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'


const App = () => {

  const [movieList, setMovieList] =useState([]) ;
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {fetchMovieList(searchValue);
  }, [searchValue]);

  const fetchMovieList = async(searchValue) =>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a411e321`;
    const data = await fetch(url);
    const dataMovie = await data.json();
    if(dataMovie.Search)
       setMovieList(dataMovie.Search);
  }

  const addMovie = (title,poster, description, year) => {
    const movieAdded = [...movieList, 
      {"Title":title,
      "Poster":poster,
      "Description":description,
      "Year":year}]
    setMovieList(movieAdded);
  }
 
  const handleRating = (title, rate) => {
    const movieListRated = movieList;
    movieListRated.map(movie=>
      (movie.Title===title)? movie={...movie, Rating : rate}:movie
    )
  } 

  return (

    <Router>

    <MovieSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    <AddMovie addMovie={addMovie} />
    
    <Switch>
      <Route exact path = '/' >
        <MovieList exact movieList={movieList} handleRating={handleRating} />
      </Route>
      <Route path = '/add-movie' component = { AddMovie } />
      <Route exact path = '/movie' component = { Movie } />
      <Route path = '/movie/:id' component = { MovieDetail } />
    </Switch>

  </Router>
  )


  {/* Movie-app without Routing
    <div>
      <MovieSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      
      <AddMovie addMovie={addMovie} />
     
      <MovieList movieList={movieList} handleRating={handleRating}/>
    </div> */}

}

export default App

