import React from 'react';
import classes from './MovieList.module.css';
import MovieItem from "./MovieItem/MovieItem";
import {movieTypeToString} from "../../utils/time";
import {MovieType} from "../../interfaces/state";

interface propType {
    movies: any[];
    type: MovieType;
    pushToSingleMovieHandler: (movieId: string) => void;
}

const movieList = (props: propType) => {
    const movieLists = props.movies.map(m => {
        return <MovieItem pushToSingleMovieHandler={props.pushToSingleMovieHandler} key={m.id} movie={m}/>
    })
    return (
        <div>
            <h3>{movieTypeToString(props.type)}</h3>
            <div className={classes.MoviesList}>
                {movieLists}
            </div>
        </div>
    );
}

export default movieList;