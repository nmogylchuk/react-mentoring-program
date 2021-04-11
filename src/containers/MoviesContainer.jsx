import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {requestMovies} from 'store/actions/MoviesActions';
import {getAllMovies, getParams} from 'store/selectors';
import MoviesList from 'pages/Home/components/MovieList/MovieList';
import queryString from 'query-string';
import {setSearchValue} from "../store/actions/SearchActions";

const MoviesContainer = ({handleSearchIcon}) => {

    const dispatch = useDispatch();
    const location = useLocation();
    const movies = useSelector(getAllMovies);
    const params = useSelector(getParams);

    useEffect(() => {
        const searchText = queryString.parse(location.search).text;
        dispatch(setSearchValue(searchText));
        dispatch(requestMovies({params}));
    }, [dispatch, params]);

    return <MoviesList handleSearchIcon={handleSearchIcon} movies={movies}/>;
};

export default MoviesContainer;
