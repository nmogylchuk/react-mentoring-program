import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getMovie} from 'store/selectors';
import {requestMovie} from 'store/actions/MoviesActions';
import 'pages/MovieDetails/MovieDetails.scss';

const MovieDetails = () => {
    const dispatch = useDispatch();
    const movieId = Number(useParams().id);
    const movie = useSelector(getMovie);

    useEffect(() => {
        dispatch(requestMovie(movieId));
    }, [dispatch, movieId]);

    const {poster_path, title, genres, release_date, vote_average, runtime, overview} = movie;
    const releaseDate = new Date(release_date).getFullYear();
    const genre = Array.isArray(genres) ? genres.join(', ') : '';

    return (
        <>
            {Object.keys(movie).length == 0 ? null : (
                <article className="movie-details">
                    <img className="movie-details__picture" src={poster_path} alt={title}/>
                    <div className="movie-details__info">
                        <div className="movie-details__header">
                            <div className="movie-details__title">{title}</div>
                            <div className="movie-details__rating">{vote_average}</div>
                        </div>
                        <div className="movie-details__genre">{genre}</div>
                        <div className="movie-details__details">
                            <div className="movie-details__year">{releaseDate}</div>
                            <div className="movie-details__time">{`${runtime} min`}</div>
                        </div>
                        <div className="movie-details__description">{overview}</div>
                    </div>
                </article>
            )}
        </>
    )
};

export default MovieDetails;
