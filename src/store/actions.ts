import ActionTypes, {MyAction} from "../interfaces/actionType";
import {Dispatch} from "redux";
import {MovieType} from "../interfaces/state";

const apiKey = "e8fc9625502253a03ed623a40d3b10ee";

const moviesStart = (movies: any[]): MyAction => {
    return {
        type: ActionTypes.FETCH_MOVIES,
        payload: {movies}
    }
}
const singleMovie = (movie: any): MyAction => {
    return {
        type: ActionTypes.FETCH_SINGLE_MOVIE,
        payload: {movie}
    }
}
const singleMovieStart = (): MyAction => {
    return {
        type: ActionTypes.FETCH_SINGLE_MOVIE_START,
        payload: {}
    }
}

export const changeType= (type: MovieType): MyAction => {
    return {
        type: ActionTypes.CHANGE_TYPE,
        payload: {type}
    }
}

export const fetchMovies = (type: MovieType) => {
    return async(dispatch: Dispatch<MyAction>) => {
        const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=1`;
        const response = await fetch(url);
        const jsonResponse = await response.json();
        dispatch(moviesStart(jsonResponse.results));
    }
}
export const searchMovies = (query: string) => {
    return async(dispatch: Dispatch<MyAction>) => {
        dispatch(changeType(MovieType.Search));
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=true`;
        const response = await fetch(url);
        const jsonResponse = await response.json();
        dispatch(moviesStart(jsonResponse.results));
    }
}

export const fetchSingleMovie = (id: string) => {
    return async(dispatch: Dispatch<MyAction>) => {
        dispatch(singleMovieStart());
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
        const response = await fetch(url);
        const jsonResponse = await response.json();
        dispatch(singleMovie(jsonResponse));
    }
}
