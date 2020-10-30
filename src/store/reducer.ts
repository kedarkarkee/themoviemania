import movieStateType, {MovieType} from "../interfaces/state";
import ActionTypes, {MyAction} from "../interfaces/actionType";


const initialState: movieStateType = {
    type: MovieType.Popular,
    movies: [],
    movie: {},
    singleMovieFetchFinished: false
}

const reducer = (state = initialState, action: MyAction): movieStateType => {
    switch (action.type){
        case ActionTypes.FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload.movies,
            }
        case ActionTypes.CHANGE_TYPE:
            return {
                ...state,
                type: action.payload.type
            }
        case ActionTypes.FETCH_SINGLE_MOVIE:
            return {
                ...state,
                movie: action.payload.movie,
                singleMovieFetchFinished: true
            }
        case ActionTypes.FETCH_SINGLE_MOVIE_START:
            return {
                ...state,
                singleMovieFetchFinished: false,
                movie: {}
            }
        case ActionTypes.SEARCH_MOVIES:
            return {
                ...state,
                movies: action.payload.movies
            }
    }
    return state;
}

export default reducer;