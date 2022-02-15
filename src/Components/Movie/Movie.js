
import React from "react";
import './Movie.css';




function Movie({title, type, posterUrl, rating, watchtrailer}){
  
    return(
        <div >
        <h3 > {title} </h3>
         <p > {type} </p>
         <p > {posterUrl}</p>
         <h4 > {rating} </h4>
        
         </div>
    )
}

export default Movie;