import React from 'react'
import '../App.css'
import MovieRating from './MovieRating'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Movie = ({match}) => {

    const [movie, setMovie]=useState({});

   useEffect(() => {
    fetchMovie();}, []); 

    const fetchMovie = async() =>{

        
        const url = 'http://www.omdbapi.com/?apikey=a411e321&i=' + match.params.id;
        const data = await fetch(url);
        const dataMovie = await data.json();
        setMovie(dataMovie);
        console.log(dataMovie);
      }
      
    return (
        
        <div className="movie-container">
            Movie
           <div>
                <img src={movie.Poster} alt={movie.Title} style={{height:350, width:225}}/>
            </div>
            <div>
                {movie.Title}<br />
                {movie.Year}<br />
                {movie.Type}<br />
            </div>
            <div>
                <MovieRating movie={movie} />
            </div>
        </div>
            
    )
}

export default Movie
