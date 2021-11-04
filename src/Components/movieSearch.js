import React from 'react'

const MovieSearch = (props) => {
    return (
        <div className="form-container stick">
            <h3>Hello my first movie card</h3>
            <div className="form-elements">
            <input type="text" value={props.searchValue} 
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder="Type movie to search..." 
             />
            </div>

        </div>
    )
}

export default MovieSearch;
