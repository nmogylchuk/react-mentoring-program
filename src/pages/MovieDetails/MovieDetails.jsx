import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import 'pages/MovieDetails/MovieDetails.scss';
import movies from 'data/movies.json';

const MovieDetails = () => {

    const [moviesDetails, setMoviesDetails] = useState([]);
    const movieId = Number(useParams().id);

    useEffect(() => {
            try {
                const getMoviesDetails = setTimeout(() => {
                    setMoviesDetails(movies.data.find(movie => movie.id === movieId));
                }, 200);
                return () => {
                    clearTimeout(getMoviesDetails);
                }
            } catch (e) {
                console.error(e);
            }
        },
        [movieId])

    function isEmptyArray(object) {
        return typeof object !== 'undefined' && object.length === 0;
    }

    const {poster_path, title, genres, release_date, vote_average, runtime, overview} = moviesDetails;

    const releaseDate = new Date(release_date).getFullYear();
    const genre = Array.isArray(genres) ? genres.join(', ') : '';

    return (
        <>
            {isEmptyArray(moviesDetails) ? null : (
                <div className="movie-details">
                    <img className="movie-details__picture" src={poster_path} alt={title}/>
                    <div className="movie-details__info">
                        <div className="movie-details__title">{title}</div>
                        <div className="movie-details__genre">{genre}</div>
                        <div className="movie-details__details">
                            <div className="movie-details__year">{releaseDate}</div>
                            <div className="movie-details__time">{`${runtime} min`}</div>
                        </div>
                        <div className="movie-details__description">{overview}</div>
                    </div>
                </div>
            )}
        </>
    )
};

export default MovieDetails;
