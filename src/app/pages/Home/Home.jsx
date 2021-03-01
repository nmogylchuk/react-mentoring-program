import React from 'react';
import Search from 'app/pages/Home/components/Search/Search';
import Navigation from 'app/pages/Home/components/Navigation/Navigation'
import MovieList from 'app/pages/Home/components/MovieList/MovieList';
import ErrorBoundary from "app/pages/shared/ErrorBoundary/ErrorBoundary";
import './Home.scss';

function Home() {
    return (
        <>
            <Search/>
            <Navigation/>
            <ErrorBoundary>
                <MovieList/>
            </ErrorBoundary>
        </>)
};

export default Home;
