import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {

    return (
        <div className="list-container">
            {props.movieList.map(movie => 
              <Movie movie={movie} handleRating={props.handleRating}/>

            )
}
        </div>

    )
}

export default MovieList
