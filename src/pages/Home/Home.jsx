import React from 'react';
import Navigation from 'pages/Home/components/Navigation/Navigation'
import MovieList from 'pages/Home/components/MovieList/MovieList';
import ErrorBoundary from "pages/shared/ErrorBoundary/ErrorBoundary";
import 'pages/Home/Home.scss';

function Home() {
    return (
        <section className="home">
            <Navigation/>
            <ErrorBoundary>
                <MovieList/>
            </ErrorBoundary>
        </section>
    )
}

export default Home;
