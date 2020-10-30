interface movieStateType {
    type: MovieType;
    movies: any[];
    movie: any;
    singleMovieFetchFinished: boolean;
}

export enum MovieType {
    Popular="popular",
    Top_Rated="top_rated",
    Now_Playing="now_playing",
    Upcoming="upcoming",
    Search="search_results"
}

export default movieStateType;