import React from 'react';
import Grid from '@material-ui/core/Grid';
import MovieItem from 'pages/Home/components/MovieItem/MovieItem';
import 'pages/Home/components/MovieList/MovieList.scss';
import movies from 'data/movies.json';

function MovieList() {

    //TODO for Error Boundary emulation
    // throw new Error("Error example");

    const moviesCount = movies.totalAmount;

    return (
        <div className='movie-list'>
            <div className='movie-list__count'><span className='movie-list__number'>{moviesCount}</span> movies found
            </div>
            <Grid container spacing={1} alignContent={'space-around'}>
                {movies.data.map(movie => (
                    <MovieItem key={movie.id} movie={movie}/>
                ))}
            </Grid>
        </div>
    );
}

export default MovieList;
