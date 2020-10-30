import {Action} from "redux";

enum ActionTypes {
    FETCH_MOVIES,
    CHANGE_TYPE,
    FETCH_SINGLE_MOVIE,
    FETCH_SINGLE_MOVIE_START,
    SEARCH_MOVIES

}
export interface MyAction extends Action<ActionTypes> {
    payload: {
        [key: string]: any
    };
}

export default ActionTypes;
