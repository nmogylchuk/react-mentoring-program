import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';
import {requestMovies} from 'store/actions/MoviesActions';
import {getAllMovies, getParams} from 'store/selectors';
import MoviesList from 'pages/Home/components/MovieList/MovieList';
import queryString from 'query-string';
import {isEmpty} from "utils/constants";

const MoviesContainer = ({handleSearchIcon}) => {

    const dispatch = useDispatch();
    const location = useLocation();
    const movies = useSelector(getAllMovies);
    const params = useSelector(getParams);

    const [searchParams, setSearchParams] = useState({
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        sortOrder: 'desc',
        filter: []
    });

    useEffect(() => {
        const searchText = queryString.parse(location.search).text;
        if (!isEmpty(searchText)) {
            setSearchParams({
                ...searchParams,
                ...searchText
            });
            dispatch(requestMovies(searchParams));
        }
    }, [dispatch, location]);


    useEffect(() => {
        dispatch(requestMovies({params}));
    }, [dispatch, params]);

    return <MoviesList handleSearchIcon={handleSearchIcon} movies={movies}/>;
};

export default MoviesContainer;
