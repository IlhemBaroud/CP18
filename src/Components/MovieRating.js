import React from 'react';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const MovieRating = (props) => {
    const[istar, setIstar]=useState(true);
    const handleClick = (e) => {
        setIstar(!istar);

    }

    return (
        
        <div>
            {
            [...Array(5)].map((star,index) => (
                <FaStar color={istar===true?{color:"yellow"}:{color:"black"}} 
                onClick={handleClick}/>
            ))
            
            }
        
           
        </div>
    )
}

export default MovieRating
