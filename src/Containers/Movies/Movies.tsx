import React, {useEffect} from "react";

import MovieList from "../../Components/MovieList/MovieList";
import movieStateType, {MovieType} from "../../interfaces/state";
import {fetchMovies} from "../../store/actions";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";

type propType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
    & RouteComponentProps;

const Movies = (props: propType) => {

    const {fetchMovies, type} = props;

    useEffect(() => {
        if(type !== MovieType.Search){
            fetchMovies(type)
        }
    }, [fetchMovies, type]);
    const pushSingleMovieHandler = (movieId: string) => {
        props.history.push("/movie", movieId);
    }
    return (
        <MovieList pushToSingleMovieHandler={pushSingleMovieHandler} type={props.type} movies={props.movies}/>
    );
}

const mapStateToProps = (state: movieStateType) => {
    return {
        type: state.type,
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchMovies: (type: MovieType) => dispatch(fetchMovies(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);