import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import ThreeDotMenu from "./../../../shared/ThreeDotMenu/ThreeDotMenu";
import './MovieItem.scss';

const MovieItem = ({movie}) => {

    const {poster_path, title, genres, release_date} = movie;
    const releaseDate = new Date(release_date).getFullYear();
    const genre = Array.isArray(genres) ? genres.join(', ') : '';

    return (
        <Grid item lg={3} md={4} sm={6} xs={12}>
            <div className="movie-item">
                <ThreeDotMenu />
                <img className="movie-item__picture" src={poster_path} alt='movie picture'/>
                <div className="movie-item__info">
                    <div className="movie-item__details">
                        <div className="movie-item__title">{title}</div>
                        <div className="movie-item__release-date">{releaseDate}</div>
                    </div>
                    <div className="movie-item__genres">{genre}</div>
                </div>
            </div>
        </Grid>
    );
};

export default MovieItem;

MovieItem.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array,
    release_date: PropTypes.string
};