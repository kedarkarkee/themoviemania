import React, {useEffect} from "react";
import {RouteComponentProps} from "react-router";
import movieStateType from "../../interfaces/state";
import {fetchSingleMovie} from "../../store/actions";
import {connect} from "react-redux";
import SingleMovie from "../../Components/SingleMovie/SingleMovie";

type propType = RouteComponentProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
const Movie = (props: propType) => {
    const {fetchSingleMovie, location, movie} = props;
    const {state} = location;
    useEffect(() => {
        fetchSingleMovie(state as string)
    }, [fetchSingleMovie, state]);

    let singleMovie = <p>Loading....</p>;
    if (props.singleMovieFetchFinished) {
        singleMovie = <SingleMovie movie={movie}/>;
    }
    return (
        <div>
            {singleMovie}
        </div>
    );
}

const mapStateToProps = (state: movieStateType) => {
    return {
        movie: state.movie,
        singleMovieFetchFinished: state.singleMovieFetchFinished
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchSingleMovie: (id: string) => dispatch(fetchSingleMovie(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);