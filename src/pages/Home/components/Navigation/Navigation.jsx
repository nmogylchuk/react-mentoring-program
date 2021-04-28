import React from 'react';
import MovieSort from './../../../../pages/Home/components/MovieSort/MovieSort';
import MovieFilter from './../../../../pages/Home/components/MovieFilter/MovieFilter';
import './Navigatio.scss';

const Navigation = () => {

    return (
        <div className='navigation'>
            <MovieFilter/>
            <MovieSort/>
        </div>
    )
};

export default Navigation;
