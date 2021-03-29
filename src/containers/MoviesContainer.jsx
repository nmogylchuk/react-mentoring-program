import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestMovies} from 'store/actions/MoviesActions';
import {getAllMovies, getParams} from 'store/selectors';
import MoviesList from 'pages/Home/components/MovieList/MovieList';

const MoviesContainer = ({handleSearchIcon}) => {

    const dispatch = useDispatch();
    const movies = useSelector(getAllMovies);
    const params = useSelector(getParams);

    useEffect(() => {
        dispatch(requestMovies({params}));
    }, [dispatch, params]);

    return <MoviesList handleSearchIcon={handleSearchIcon} movies={movies}/>;
};

export default MoviesContainer;
