import React from 'react'
import '../App.css'
import MovieRating from './MovieRating'
import { Link } from 'react-router-dom';

const Movie = (props) => {

    return (
        
        <div key = {props.movie.imdbID}> 
            <Link to = {`/movie/${props.movie.imdbID}`}>
                
            <div>
                <img src={props.movie.Poster} alt={props.movie.Title} style={{height:350, width:225}}/>
            </div>
            <div>
                {props.movie.Title}<br />
                {props.movie.Year}<br />
                {props.movie.Type}<br />
            </div>
            <div>
                <MovieRating movie={props.movie} />
            </div> 
            </Link>
    
        </div>

    )
}

export default Movie
