import React from 'react';
import MovieSort from "pages/Home/components/MovieSort/MovieSort";
import MovieFilter from "pages/Home/components/MovieFilter/MovieFilter";
import 'pages/Home/components/Navigation/Navigatio.scss';

const Navigation = () => {

    const movieFilterData = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const movieSortData = ['Release Date', 'From A to Z', 'From Z to A'];

    return (
        <div className='navigation'>
            <MovieFilter movieFilterData={movieFilterData}/>
            <MovieSort movieSortData={movieSortData}/>
        </div>
    )
};

export default Navigation;
