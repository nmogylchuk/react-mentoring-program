import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import MovieItem from 'pages/Home/components/MovieItem/MovieItem';
import 'pages/Home/components/MovieList/MovieList.scss';
import movies from 'data/movies.json';

const MovieList = (props) => {
    const {handleSearchIcon} = props;
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
            try {
                const getMovies = setTimeout(() => {
                    setMoviesData(movies);
                }, 200);
                return () => {
                    clearTimeout(getMovies);
                }
            } catch (e) {
                console.error(e);
            }
        },
        [])

    function isEmptyArray(object) {
        return typeof object !== 'undefined' && object.length === 0;
    }

    const moviesCount = isEmptyArray(moviesData) ? 0 : moviesData.totalAmount;
    return (
        <div className='movie-list'>
            <div className='movie-list__count'><span className='movie-list__number'>{moviesCount}</span> movies
                found
            </div>
            <Grid container spacing={1} alignContent={'space-around'}>
                {isEmptyArray(moviesData) ? null : (
                    moviesData.data.map(movie => (
                        <MovieItem key={movie.id} movie={movie} handleSearchIcon={handleSearchIcon}
                                   // id={movie.id}
                                   // poster_path={movie.poster_path}
                                   // title={movie.title}
                                   // genres={movie.genres}
                                   // release_date={movie.release_date}
                                   // overview={movie.overview}
                                   // runtime={movie.runtime}
                        />

                    ))
                )}
            </Grid>
        </div>
    );
}

export default MovieList;
