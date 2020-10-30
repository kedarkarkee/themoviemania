import React from "react";
import classes from './MovieItem.module.css';


interface propType {
    movie: {[key: string]: string};
    pushToSingleMovieHandler: (movieId: string) => void;
}
const baseImageUrl = "https://image.tmdb.org/t/p/w220_and_h330_face"
const movieItem = (props: propType) => {
    return (
        <div className={classes.MovieContainer} onClick={()=>props.pushToSingleMovieHandler(props.movie.id)}>
            <img src={baseImageUrl + props.movie["poster_path"]} alt={props.movie.title}/>
            <p>{props.movie.title}</p>
        </div>
    );
}

export default movieItem;