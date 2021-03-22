import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestMovies} from 'store/actions/MoviesActions';
import {getAllMovies, getParams} from 'store/selectors';
import MoviesList from 'pages/Home/components/MovieList/MovieList';
import {isEmptyArray} from "utils/constants";

const MoviesContainer = () => {
    const dispatch = useDispatch();

    const movies = useSelector(getAllMovies);
    const params = useSelector(getParams);

    useEffect(() => {
        dispatch(requestMovies({params}));
    }, [dispatch, params]);

    return <MoviesList movies={movies}/>;
};

export default MoviesContainer;
