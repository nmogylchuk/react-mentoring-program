import React from 'react';
import Grid from '@material-ui/core/Grid';
import MovieItem from 'pages/Home/components/MovieItem/MovieItem';
import 'pages/Home/components/MovieList/MovieList.scss';
// import movies from 'data/movies.json';
import useMockFetch from "pages/hooks/useMockFetch";
import {isEmptyArray} from "utils/constants";

const MovieList = ({movies}) => {
    const {handleSearchIcon} = movies;
    const moviesCount = isEmptyArray(movies) ? 0 : movies.totalAmount;

    return (
        <div className='movie-list'>
            <div className='movie-list__count'><span className='movie-list__number'>{moviesCount}</span> movies
                found
            </div>
            <Grid container spacing={1} alignContent={'space-around'}>

                {isEmptyArray(movies) ? null : (
                    movies.data.map(movie => (
                        <MovieItem key={movie.id} movie={movie} handleSearchIcon={handleSearchIcon}/>
                    ))
                )}
            </Grid>
        </div>
    );
}

export default MovieList;
