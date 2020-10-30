import React from "react";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import classes from './SingleMovie.module.css';
import {minuteFormat} from "../../utils/time";

interface propType {
    movie: {
        [p: string]: any
    }
}
const SingleMovie = (props: propType) => {
    console.log(props.movie);
    const baseImageUrl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
    const baseBackdropUrl = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces";
    const movie = props.movie;
    const genres: string = movie.genres.map((g: any)=>g.name).join(", ");
    const runtime = minuteFormat(movie.runtime);
    const rating = movie.vote_average * 10;
    return (
        <div className={classes.Wrapper}>
        <div className={classes.MovieContainer}>
            <img src={baseImageUrl + movie["poster_path"]} alt={movie.id} className={classes.PosterImage} />
            <div className={classes.MovieDetails}>
                <h3>{movie.title}  ({movie.release_date.substring(0,4)})</h3>
                <p>{movie.release_date} &#8226; {genres} &#8226; {runtime}</p>
                <span className={classes.RatingContainer}>
                     <CircularProgressbar value={rating} text={rating + "%"} className={classes.ProgressBar}   styles={buildStyles({
                         textColor: "white",
                         pathColor: "gold",
                         // trailColor: "gold"
                         textSize: "1.5rem"
                     })} />
                    <p>User Rating</p>
                </span>

                <p><i>{movie.tagline}</i></p>
                <h4>Overview</h4>
                <p>{movie.overview}</p>
            </div>
        </div>
            <img src={baseBackdropUrl + movie.backdrop_path} alt={movie.id} className={classes.BackdropImage}/>
        </div>
    );
}

export default SingleMovie;