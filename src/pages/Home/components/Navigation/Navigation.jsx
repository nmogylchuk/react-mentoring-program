import React from 'react';
import MovieSort from "pages/Home/components/MovieSort/MovieSort";
import MovieFilter from "pages/Home/components/MovieFilter/MovieFilter";
import {movieFilterData, movieSortData} from 'utils/constants';
import 'pages/Home/components/Navigation/Navigatio.scss';

const Navigation = () => {

    return (
        <div className='navigation'>
            <MovieFilter movieFilterData={movieFilterData}/>
            <MovieSort movieSortData={movieSortData}/>
        </div>
    )
};

export default Navigation;
