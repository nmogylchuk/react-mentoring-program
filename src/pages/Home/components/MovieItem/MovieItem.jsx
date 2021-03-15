import React, {useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ThreeDotMenu from 'pages/Home/components/MovieItem/ThreeDotMenu/ThreeDotMenu';
import ThreeDotMenuActions from 'pages/Home/components/MovieItem/ThreeDotMenuActions/ThreeDotMenuActions';
import 'pages/Home/components/MovieItem/MovieItem.scss';

const MovieItem = (props) => {
    const {handleSearchIcon, movie} = props;

    const [threeDotMenuVisible, setThreeDotMenuVisible] = useState(false);

    const handleThreeDotMenuActions = useCallback(() => {
        setThreeDotMenuVisible(!threeDotMenuVisible);
    }, [threeDotMenuVisible]);

    const history = useHistory();

    const goToMovieDetails = () => {
        handleSearchIcon();
        history.push(`/${movie.id}`)
    }

    const releaseDate = new Date(movie.release_date).getFullYear();
    const genre = Array.isArray(movie.genres) ? movie.genres.join(', ') : '';

    return (
        <Grid item lg={3} md={4} sm={6} xs={12}>
            <article className="movie-item">
                <ThreeDotMenu showMenu={handleThreeDotMenuActions}/>
                {threeDotMenuVisible &&
                <ThreeDotMenuActions closeMenu={handleThreeDotMenuActions} movie={movie}/>}
                <img src={movie.poster_path} alt={`picture of ${movie.title}`} onClick={goToMovieDetails}/>
                <div className="movie-item__info">
                    <div className="movie-item__details">
                        <div className="movie-item__title">{movie.title}</div>
                        <div className="movie-item__release-date">{releaseDate}</div>
                    </div>
                    <div className="movie-item__genres">{genre}</div>
                </div>
            </article>
        </Grid>
    );
}

export default MovieItem;

MovieItem.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        release_date: PropTypes.string.isRequired
    })
};

