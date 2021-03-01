import React from 'react';
import Navigation from 'app/pages/Home/components/Navigation/Navigation'
import MovieList from 'app/pages/Home/components/MovieList/MovieList';
import ErrorBoundary from "app/pages/shared/ErrorBoundary/ErrorBoundary";
import './Home.scss';

function Home() {
    return (
        <section className="home">
            <Navigation/>
            <ErrorBoundary>
                <MovieList/>
            </ErrorBoundary>
        </section>
    )
};

export default Home;
