import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import 'pages/MovieDetails/MovieDetails.scss';
import movies from 'data/movies.json';
import useMockFetch from "pages/hooks/useMockFetch";
import {isEmptyArray} from "utils/constants";

const MovieDetails = () => {

    const movieId = Number(useParams().id);
    const moviesDetails = useMockFetch(movies, movieId);
    const {poster_path, title, genres, release_date, vote_average, runtime, overview} = moviesDetails;

    const releaseDate = new Date(release_date).getFullYear();
    const genre = Array.isArray(genres) ? genres.join(', ') : '';

    return (
        <>
            {isEmptyArray(moviesDetails) ? null : (
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
